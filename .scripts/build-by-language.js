import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { TwingEnvironment, TwingLoaderArray } from 'twing';

import {fromMarkdown} from 'mdast-util-from-markdown';

main();

async function main() {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const solidMd = join(__dirname, '..', 'markdown', 'solid.md');

  const markdownContent = readFileSync(solidMd);

  const parsedContent = fromMarkdown(markdownContent)

  const templatePath = join(__dirname, '..', 'src', 'views', 'ByLanguage.tsx.twig');

  const twingLoader = new TwingLoaderArray({
      'template.twig': readFileSync(templatePath).toString(),
  });

  const twing = new TwingEnvironment(twingLoader);

  const reactComponent = await twing.render('template.twig', {
      ast: parsedContent
  });

  const componentPath = join(__dirname, '..', 'src', 'views', 'ByLanguage.tsx');

  writeFileSync(componentPath, reactComponent)

}