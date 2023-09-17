import {readFileSync, writeFileSync} from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {TwingEnvironment, TwingLoaderArray, TwingFunction} from 'twing';

// import {fromMarkdown} from 'mdast-util-from-markdown';
import yaml from 'yaml';

main();

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const solidYaml = join(__dirname, '..', '..', 'yaml', 'solid.yml');
  const yamlString = readFileSync(solidYaml).toString('utf-8');
  const yamlObject = yaml.parse(yamlString);

  const templatePath = join(__dirname, '..', '..', 'src', 'views', 'ByLanguage.tsx.twig');

  const twingLoader = new TwingLoaderArray({
    'template.twig': readFileSync(templatePath).toString(),
  });

  const twing = new TwingEnvironment(twingLoader);

  twing.addFunction(
    new TwingFunction(
      'node_id',
      async (key) => {
        return key.replace(/[^\w]+/gi, '-').toLowerCase();
      },
      [{name: 'key', defaultValue: ''}],
    ),
  );

  const reactComponent = await twing.render('template.twig', {
    ast: yamlObject,
  });

  const componentPath = join(__dirname, '..', '..', 'src', 'views', 'ByLanguage.tsx');

  writeFileSync(componentPath, reactComponent);
}
