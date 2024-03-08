const openai = new OpenAI();
import OpenAI from 'openai';
import sade from 'sade';
import yaml from 'yaml';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import {globby} from 'globby';
import {join as pathJoin, dirname, basename} from 'path';
import {promises as fs} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const langPath = pathJoin(__dirname, '..', '..', 'yaml', 'lang');
const {readFile, writeFile, mkdir} = fs;

const askGpt = async (messages, options) => {
  const {gptModel: model} = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {role: 'system', content: 'You are a helpful assistant in the domain of computer science.'},
      ...messages.map((message) => ({role: 'user', content: message})),
    ],
    model,
  });
  return completion.choices[0].message.content;
};

async function translateExample(tsExampleFile, itemTitle, example, options) {
  const {generate: type, language, extension, regenExisting} = options;

  const exampleFile = pathJoin(langPath, language, `${example.codeFile}.${extension}`);
  if (existsSync(exampleFile) && !regenExisting) {
    return readFile(exampleFile).then((buf) => buf.toString('utf-8'));
  }

  const tsExampleType = basename(tsExampleFile).replace('-example.ts');
  if (!existsSync(tsExampleFile)) {
    return;
  }

  console.log(`Generating ${language} example (${example.title ?? 'generic'}) for ${itemTitle}...`);
  const code = await readFile(tsExampleFile).then((buf) => buf.toString('utf-8'));

  const message =
    type === 'patterns'
      ? `Please convert the following ${itemTitle.toLowerCase()} design pattern example to ${language} programming language by benefiting all the capabilities of this specific langauge.`
      : `Please convert the following ${itemTitle.toLowerCase()} coding principle ${tsExampleType} example to ${language} programming language by benefiting all the capabilities of this specific langauge.`;

  const response = await askGpt(
    [
      `${message}
Please provide only code, without the markdown formatting.
Please make the code as simple as possible and make sure it is easy to understand.
Inside the translated code, please also keep (and format properly) the comments from the original example (as much as the code allows - explanation comments are mandatory to keep).

${code}`,
    ],
    options,
  );

  const exampleFolder = dirname(exampleFile);
  console.log(`Writing ${exampleFile}...`);
  await mkdir(exampleFolder, {recursive: true});
  await writeFile(exampleFile, response);
  console.log(`Done.`);

  return response;
}

async function generateExamples(options) {
  const {generate: type} = options;

  const patternTypes = type === 'patterns' ? ['behavioural', 'creational', 'structural'] : ['solid', 'other'];
  for (const patternType of patternTypes) {
    const patternYaml = await readFile(pathJoin(langPath, '_', `${type}-${patternType}.yml`)).then((buf) =>
      buf.toString('utf-8'),
    );
    const patternObject = yaml.parse(patternYaml);
    for (const item of patternObject[type]) {
      for (const example of item.examples) {
        if (!example.codeFile) {
          continue;
        }
        const tsExampleFile = pathJoin(langPath, 'typescript', `${example.codeFile}.ts`);
        await translateExample(tsExampleFile, item.title, example, options);

        // TODO: add refined example
      }
      // process.exit(0);
    }
  }
}

async function buildLanguageFile(options) {
  const {language, regenExisting} = options;

  const languageYaml = pathJoin(langPath, language, `lang.yml`);
  if (existsSync(languageYaml) && !regenExisting) {
    return;
  }

  console.log(`Generating language description for ${language}...`);
  const tsLanguageYaml = await readFile(pathJoin(langPath, 'typescript', `lang.yml`)).then((buf) =>
    buf.toString('utf-8'),
  );

  const response = await askGpt(
    [
      `Please provide a similar yaml content for the ${language} language.
Please provide only code, without the markdown formatting.

${tsLanguageYaml}`,
    ],
    options,
  );

  const languageFolder = dirname(languageYaml);
  console.log(`Writing ${languageYaml}...`);
  await mkdir(languageFolder, {recursive: true});
  await writeFile(languageYaml, response);
  console.log(`Done.`);
}

async function main() {
  sade('build-language-examples [options]')
    .version('1.0.5')
    .describe('Building language examples...')
    .option('--language, -l', 'Generating for language...')
    .option('--extension, -e', 'Language files extension...')
    .option('--generate, -g', 'Generating... (all, principles, patterns)', 'all')
    .option('--regen-existing', 'Regenerate existing examples')
    .option('--gpt-model', 'GPT Model', 'gpt-4-turbo-preview')
    .action(async (_, options) => {
      options = {
        generate: 'all',
        language: 'python',
        extension: 'py',
        regenExisting: options['regen-existing'] ?? false,
        gptModel: options['gpt-model'],
        ...options,
      };
      // console.log(options);
      // process.exit(0);

      await buildLanguageFile(options);

      const {generate} = options;
      if (generate === 'all' || generate === 'patterns') {
        await generateExamples({
          ...options,
          generate: 'patterns',
        });
      }
      if (generate === 'all' || generate === 'principles') {
        await generateExamples({
          ...options,
          generate: 'principles',
        });
      }
    })
    .parse(process.argv);
}

main();
