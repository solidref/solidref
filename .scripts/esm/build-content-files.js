import {promises as fs} from 'fs';
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

async function main() {
  const search = ofUnix(pathJoin(__dirname, '..', '..', 'yaml', 'principles-patterns', '**', '*.yml'));

  const yamlFiles = await globby([search]);

  for (let file of yamlFiles) {
    file = file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', '');
    console.log(file);

    const yamlString = await readFile(file, 'utf-8');
    const yamlObject = yaml.parse(yamlString);
    const jsonName = basename(file).replace('.yml', '.json')

    const principlesPatternsPath = pathJoin(__dirname, '..', '..', 'public', 'generated', 'principles-patterns');

    await fs.mkdir(principlesPatternsPath, {recursive: true});

    await writeFile(
      pathJoin(principlesPatternsPath, jsonName),
      JSON.stringify(yamlObject, ...jsonStringifyConfig),
    );
  }

}
