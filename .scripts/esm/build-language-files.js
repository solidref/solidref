import {promises as fs} from 'fs';
import {existsSync} from 'fs';
import {join as pathJoin, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {globby} from 'globby';

import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonStringifyConfig = process.env.NODE_ENV === 'development' ? [null, 2] : [];

const langPath = pathJoin(__dirname, '..', '..', 'yaml', 'lang');

const {readFile, writeFile, mkdir} = fs;

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
    'clean-code',
  ];
  for (const name of names) {
    let genericExamplesYamlObject = {};
    let key;

    const genericExamplesFile = pathJoin(langPath, '_', name) + '.yml';
    if (existsSync(genericExamplesFile)) {
      const genericExamplesYamlString = await readFile(genericExamplesFile, 'utf-8');
      genericExamplesYamlObject = yaml.parse(genericExamplesYamlString);
      key = Object.keys(genericExamplesYamlObject)[0];
    }

    // console.log(name, key, genericExamplesFile, genericExamplesYamlObject);

    const examplesFile = pathJoin(langPath, langYamlObject.code, name) + '.yml';
    let examplesYamlObject = {};
    if (existsSync(examplesFile)) {
      const examplesYamlString = await readFile(examplesFile, 'utf-8');
      examplesYamlObject = yaml.parse(examplesYamlString);
      if (!key) {
        key = Object.keys(examplesYamlObject)[0];
      }
    }

    // console.log(name, key, examplesFile, examplesYamlObject);

    (examplesYamlObject[key] || []).forEach((item) => {
      const defaultItem = (genericExamplesYamlObject[key] ?? []).find(
        (defaultItem) => defaultItem.title === item.title,
      );
      if (defaultItem) {
        defaultItem.examples = [...(defaultItem.examples ?? []), ...item.examples];
        defaultItem.examples = [...new Set(defaultItem.examples)]; // make'em unique
      } else {
        genericExamplesYamlObject[key] = genericExamplesYamlObject[key] ?? [];
        genericExamplesYamlObject[key].push(item);
      }
    });

    // console.log(name, key, examplesFile, examplesYamlObject);

    for (const item of genericExamplesYamlObject[key] ?? []) {
      for (const example of item.examples) {
        if (example.codeFile) {
          const codeFile = pathJoin(langPath, langYamlObject.code, example.codeFile) + `.${langYamlObject.ext}`;
          if (existsSync(codeFile)) {
            example.code = await readFile(codeFile, 'utf-8');
          } else {
            console.error(`File not found: ${codeFile}`);
          }
        }
      }
      item.examples = item.examples.filter((example) => example.code);
      if (item.examples.length === 1) {
        delete item.examples[0].title;
      }
    }

    // console.log(name, key, JSON.stringify(genericExamplesYamlObject));

    if (name !== 'clean-code') {
      const [docsType, docsCategory] = name.split('-');
      if (genericExamplesYamlObject[docsType] && genericExamplesYamlObject[docsType].length) {
        langYamlObject[docsType] = {
          ...(langYamlObject[docsType] ?? {}),
          [`${docsType}_${docsCategory}`]: genericExamplesYamlObject[docsType] ?? [],
        };
      }
    } else {
      langYamlObject[name] = genericExamplesYamlObject[name] ?? [];
    }
  }

  const generatedDirName = pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages');
  await mkdir(generatedDirName, {recursive: true});

  const fileName = pathJoin(generatedDirName, langYamlObject.code + '.json');
  await writeFile(fileName, JSON.stringify(langYamlObject, ...jsonStringifyConfig));
}

async function main() {
  const search = ofUnix(pathJoin(langPath, '**', 'lang.yml'));
  // const search = ofUnix(pathJoin(langPath, 'typescript', 'lang.yml'));

  const yamlFiles = await globby([search]);
  await Promise.all(
    yamlFiles
      .filter(
        // (file) => file.includes('typescript'),
        (file) => true,
      )
      .map((file) => yamlParseAndSave(file)),
  );

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
