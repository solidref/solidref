import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { TwingEnvironment, TwingLoaderArray, TwingFunction } from 'twing';

import {fromMarkdown} from 'mdast-util-from-markdown';

main();

async function main() {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const solidMd = join(__dirname, '..', '..', 'markdown', 'solid.md');

  const markdownContent = readFileSync(solidMd);

  const parsedContent = fromMarkdown(markdownContent)

  console.log(parsedContent);

  const templatePath = join(__dirname, '..', '..', 'src', 'views', 'ByLanguage.tsx.twig');

  const twingLoader = new TwingLoaderArray({
      'template.twig': readFileSync(templatePath).toString(),
  });

  const twing = new TwingEnvironment(twingLoader);

  twing.addFunction(new TwingFunction('node_id', async (key) => {
    return key.replace(/[^\w]+/gi, '-').toLowerCase();
  }, [{name: 'key', defaultValue: ''}]));

  const reactComponent = await twing.render('template.twig', {
      ast: parsedContent
  });

  const componentPath = join(__dirname, '..', '..', 'src', 'views', 'ByLanguage.tsx');

  writeFileSync(componentPath, reactComponent)

}