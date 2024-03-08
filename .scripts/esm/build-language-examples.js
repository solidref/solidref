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

const askGpt = async (messages) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {role: 'system', content: 'You are a helpful assistant in the domain of computer science.'},
      ...messages.map((message) => ({role: 'user', content: message})),
    ],
    // model: 'gpt-3.5-turbo',
    model: 'gpt-4-turbo-preview',
  });
  return completion.choices[0].message.content;
};

async function generateExamples(type, language, extension) {
  const patternTypes = type === 'patterns' ? ['behavioural', 'creational', 'structural'] : ['solid', 'other'];
  for (const patternType of patternTypes) {
    const patternYaml = await readFile(pathJoin(langPath, '_', `${type}-${patternType}.yml`)).then((buf) =>
      buf.toString('utf-8'),
    );
    const patternObject = yaml.parse(patternYaml);
    for (const pattern of patternObject[type]) {
      for (const example of pattern.examples) {
        if (!example.codeFile) {
          continue;
        }
        const tsExampleFile = pathJoin(langPath, 'typescript', `${example.codeFile}.ts`);
        const tsExampleType = basename(tsExampleFile).replace('-example.ts');
        if (!existsSync(tsExampleFile)) {
          continue;
        }

        console.log(`Generating ${language} example (${example.title ?? 'generic'}) for ${pattern.title}...`);
        const code = await readFile(tsExampleFile).then((buf) => buf.toString('utf-8'));

        const message =
          type === 'patterns'
            ? `Please convert the following ${pattern.title.toLowerCase()} design pattern example to ${language} programming language by benefiting all the capabilities of this specific langauge.`
            : `Please convert the following ${pattern.title.toLowerCase()} coding principle ${tsExampleType} example to ${language} programming language by benefiting all the capabilities of this specific langauge.`;

        const response = await askGpt([
          `${message}
Please provide only code, without the markdown formatting.
Please make the code as simple as possible and make sure it is easy to understand.
Inside the translated code, please also keep the comments from the original example (if they fit in) and format them properly.

${code}`,
        ]);

        const exampleFile = pathJoin(langPath, language, `${example.codeFile}.${extension}`);
        const exampleFolder = dirname(exampleFile);
        console.log(`Writing ${exampleFile}...`);
        await mkdir(exampleFolder, {recursive: true});
        await writeFile(exampleFile, response);
      }
    }
  }
}

async function main() {
  sade('build-language-examples [options]')
    .version('1.0.5')
    .describe('Building language examples...')
    .option('--language, -l', 'Generating for language...')
    .option('--extension, -e', 'Language files extension...')
    .option('--generate, -g', 'Generating... (all, principles, patterns)', 'all')
    .action(async (_, {language, generate, extension}) => {
      if (generate === 'all' || generate === 'patterns') {
        await generateExamples('patterns', language, extension);
      }
      if (generate === 'all' || generate === 'principles') {
        await generateExamples('principles', language, extension);
      }
    })
    .parse(process.argv);
}

main();
