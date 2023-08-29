import {promises as fs} from 'fs';
import {join as pathJoin, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {globby} from 'globby';

import {fromMarkdown} from 'mdast-util-from-markdown';
import {createRequire} from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {readFile, writeFile, mkdir} = fs;

main();

function ofUnix(file) {
  return file.replace(/\\/gi, '/');
}

async function parseAndSave(file) {
  console.log(file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', ''));

  const mdString = await readFile(file).toString('utf-8');
  const mdObject = fromMarkdown(mdString);

  const debug = process.env === 'development' ? [null, 2] : [];

  const dirName = pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages');
  await mkdir(dirName, {recursive: true});

  const fileName = pathJoin(dirName, basename(file, '.md') + '.json');
  await writeFile(fileName, JSON.stringify(mdObject, ...debug));
}

async function main() {
  const mdFiles = await globby([ofUnix(pathJoin(__dirname, '..', '..', 'markdown', 'lang', '*.md'))]);
  await Promise.all(mdFiles.map((file) => parseAndSave(file)));

  const languageHierarchy = mdFiles
    .map((file) => basename(file, '.md').split('-'))
    .reduce((acc, cur) => {
      if (cur.length === 1) {
        return {
          ...acc,
          [cur[0]]: [cur[0]],
        };
      }
      return {
        ...acc,
        [cur[0]]: [...(acc[cur[0]] || []), cur[1]],
      };
    }, {});
  await writeFile(
    pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages.json'),
    JSON.stringify(languageHierarchy),
  );
}
