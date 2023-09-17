import {promises as fs} from 'fs';
import {join as pathJoin, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {globby} from 'globby';

import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonStringifyConfig = process.env === 'development' ? [null, 2] : [];

const {readFile, writeFile, mkdir} = fs;

main();

function ofUnix(file) {
  return file.replace(/\\/gi, '/');
}

async function yamlParseAndSave(file) {
  console.log(file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', ''));

  const yamlString = await readFile(file, 'utf-8');
  const yamlObject = yaml.parse(yamlString);

  const dirName = pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages');
  await mkdir(dirName, {recursive: true});

  const fileName = pathJoin(dirName, basename(file, '.yml') + '.json');
  await writeFile(fileName, JSON.stringify(yamlObject, ...jsonStringifyConfig));
}

async function main() {
  const yamlFiles = await globby([ofUnix(pathJoin(__dirname, '..', '..', 'yaml', 'lang', '*.yml'))]);
  await Promise.all(yamlFiles.map((file) => yamlParseAndSave(file)));

  const languageHierarchy = {};
  for (const file of yamlFiles) {
    const yamlString = await readFile(file, 'utf-8');
    const yamlObject = yaml.parse(yamlString);

    const languageName = yamlObject?.parent ?? basename(file, '.yml');
    languageHierarchy[languageName] = {
      children: [...(languageHierarchy?.[languageName]?.children ?? []), basename(file, '.yml')],
      birth: yamlObject.birth,
      death: yamlObject.death,
      code: yamlObject.code,
    };
  }

  await writeFile(
    pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages.json'),
    JSON.stringify(languageHierarchy, ...jsonStringifyConfig),
  );
}
