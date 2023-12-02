import {promises as fs} from 'fs';
import { existsSync } from 'fs';
import {join as pathJoin, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {globby} from 'globby';

import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonStringifyConfig = process.env.NODE_ENV === 'development' ? [null, 2] : [];

const {readFile, writeFile, mkdir} = fs;

main();

function ofUnix(file) {
  return file.replace(/\\/gi, '/');
}

async function yamlParseAndSave(file) {
  file = file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', '');
  console.log(file);
  const sourceDirName = dirname(file);

  const yamlString = await readFile(file, 'utf-8');
  const yamlObject = yaml.parse(yamlString);

  [
    'patterns-behavioral',
    'patterns-creational',
    'patterns-structural',
    'principles-proprietary',
    'principles-solid',
  ].forEach(async (name) => {
    const newFile = pathJoin(sourceDirName, name) + '.yml';
    if (existsSync(newFile)) {
      console.log(newFile);
      const yamlString = await readFile(file, 'utf-8');
      const ch = name.split('-');
      yamlObject[ch[0]] = {
        ...(yamlObject[ch[0]] || {}),
        [ch[1]]: yaml.parse(yamlString),
      };
    }
  });

  const generatedDirName = pathJoin(
    __dirname,
    '..',
    '..',
    'public',
    'generated',
    'languages',
  );
  await mkdir(generatedDirName, {recursive: true});

  const fileName = pathJoin(generatedDirName, yamlObject.code + '.json');
  await writeFile(fileName, JSON.stringify(yamlObject, ...jsonStringifyConfig));
}

async function main() {
  const search = ofUnix(pathJoin(__dirname, '..', '..', 'yaml', 'lang', '**', 'lang.yml'));

  const yamlFiles = await globby([search]);
  await Promise.all(yamlFiles.map((file) => yamlParseAndSave(file)));

  const languageHierarchy = [];
  for (const file of yamlFiles) {
    const yamlString = await readFile(file, 'utf-8');
    const yamlObject = yaml.parse(yamlString);

    languageHierarchy.push(yamlObject);
  }

  await writeFile(
    pathJoin(__dirname, '..', '..', 'public', 'generated', 'hierarchy.json'),
    JSON.stringify(languageHierarchy, ...jsonStringifyConfig),
  );
}
