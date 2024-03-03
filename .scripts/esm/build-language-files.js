import { promises as fs } from 'fs';
import { existsSync } from 'fs';
import { join as pathJoin, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { globby } from 'globby';

import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonStringifyConfig = process.env.NODE_ENV === 'development' ? [null, 2] : [];

const langPath = pathJoin(__dirname, '..', '..', 'yaml', 'lang')

const { readFile, writeFile, mkdir } = fs;

main();

function ofUnix(file) {
  return file.replace(/\\/gi, '/');
}

async function yamlParseAndSave(file) {
  file = file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', '');
  console.log(file);

  const langYamlString = await readFile(file, 'utf-8');
  const langYamlObject = yaml.parse(langYamlString);

  const names = [
    'patterns-behavioural',
    'patterns-creational',
    'patterns-structural',
    'patterns-proprietary',
    'principles-solid',
    'principles-other',
    'principles-proprietary',
  ];
  for (const name of names) {
    let defaultPPYamlObject = {};
    let key;

    const defaultPPFile = pathJoin(langPath, '_', name) + '.yml';
    if (existsSync(defaultPPFile)) {
      const defaultPPYamlString = await readFile(defaultPPFile, 'utf-8')
      defaultPPYamlObject = yaml.parse(defaultPPYamlString);
      key = Object.keys(defaultPPYamlObject)[0];
    }

    const ppFile = pathJoin(langPath, langYamlObject.code, name) + '.yml';
    let ppYamlObject = {};
    if (existsSync(ppFile)) {
      console.log(ppFile);
      const ppYamlString = await readFile(ppFile, 'utf-8');
      ppYamlObject = yaml.parse(ppYamlString);
      if (!key) {
        key = Object.keys(ppYamlObject)[0];
      }
    }

    (ppYamlObject[key] || []).forEach((item) => {
      const defaultItem = (defaultPPYamlObject[key] ?? []).find((defaultItem) => defaultItem.title === item.title);
      if (defaultItem) {
        defaultItem.examples = [...defaultItem.examples ?? [], ...item.examples]
        defaultItem.examples = [... new Set(defaultItem.examples)] // make'em unique
      } else {
        defaultPPYamlObject[key] = defaultPPYamlObject[key] ?? []
        defaultPPYamlObject[key].push(item);
      }
    });

    for (const item of defaultPPYamlObject[key] ?? []) {
      for (const example of item.examples) {
        if (example.codeFile) {
          const codeFile = pathJoin(langPath, langYamlObject.code, example.codeFile) + `.${langYamlObject.ext}`;
          if (existsSync(codeFile)) {
            example.code = await readFile(codeFile, 'utf-8');
          } else {
            console.error(`File not found: ${codeFile}`)
          }
        }
      }
      item.examples = item.examples.filter((example) => example.code);
      if (item.examples.length === 1) {
        delete item.examples[0].title
      }
    }

    const [pp, ppType] = name.split('-');
    if (defaultPPYamlObject[pp] && defaultPPYamlObject[pp].length) {
      langYamlObject[pp] = {
        ...(langYamlObject[pp] ?? {}),
        [`${pp}_${ppType}`]: defaultPPYamlObject[pp] ?? [],
      };
    }
  }

  const generatedDirName = pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages');
  await mkdir(generatedDirName, { recursive: true });

  const fileName = pathJoin(generatedDirName, langYamlObject.code + '.json');
  await writeFile(fileName, JSON.stringify(langYamlObject, ...jsonStringifyConfig));
}

async function main() {
  const search = ofUnix(pathJoin(langPath, '**', 'lang.yml'));

  const yamlFiles = await globby([search]);
  await Promise.all(yamlFiles.filter(
    // (file) => file.includes('typescript'),
    (file) => true,
  ).map((file) => yamlParseAndSave(file)));

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
