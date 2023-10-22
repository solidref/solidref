// selectors.js
import {selector, selectorFamily} from 'recoil';
import {
  CodingPrinciple,
  CodingPrinciplesObject,
  LanguageHierarchy,
  LanguageHierarchyObject,
  LanguageObject,
  LanguageYamlObject,
  codingPrinciplesState,
} from './state';

export const loadLanguageHierarchy = selector<LanguageHierarchyObject>({
  key: 'loadLanguageHierarchy',
  get: async () => {
    const response = await fetch('/generated/languages.json');
    const data = (await response.json()) as LanguageHierarchy;

    return {
      ready: true,
      rootLanguages: Object.keys(data).filter((key) => data?.[key]?.children?.length),
      allLanguages: Object.keys(data)
        .map((l) => [l, ...(data[l].children ?? [])])
        .reduce((acc, cur) => [...new Set([...acc, ...cur])].sort(), []),
      hierarchy: data,
    } as unknown as LanguageHierarchyObject;
  },
});

// This is a selector family, which means it can take a parameter (in this case, the language)
export const loadCodingPrinciples = selector<CodingPrinciplesObject>({
  key: 'loadCodingPrinciples',
  get: async () => {
    const principlesYAML = [
      {
        title: 'SOLID / Single Responsibility Principle (SRP)',
        description:
          'A class should have only one reason to change. This ensures that a class addresses only one concern, making the system more modular and easier to maintain.',
      },
      {
        title: 'SOLID / Open/Closed Principle (OCP)',
        description:
          'Software entities should be open for extension but closed for modification. This allows adding new features without altering existing code.',
      },
      {
        title: 'SOLID / Liskov Substitution Principle (LSP)',
        description:
          'Subtypes must be substitutable for their base types. This ensures that a derived class is truly an extension of the base class.',
      },
      {
        title: 'SOLID / Interface Segregation Principle (ISP)',
        description:
          'Clients should not be forced to depend on interfaces they do not use. This makes the system more modular and easier to understand.',
      },
      {
        title: 'SOLID / Dependency Inversion Principle (DIP)',
        description:
          'High-level modules should not depend on low-level modules; both should depend on abstractions. This decouples software modules.',
      },
      {
        title: "Don't Repeat Yourself (DRY)",
        description:
          'Every piece of knowledge or logic should exist in a single place. This reduces repetition and potential errors.',
      },
      {
        title: 'Keep It Simple, Stupid (KISS)',
        description: 'Systems work best when kept simple. Avoid unnecessary complexity.',
      },
      {
        title: "You Aren't Gonna Need It (YAGNI)",
        description: "Avoid adding functionality until it's necessary. Prevents over-engineering.",
      },
      {
        title: 'Law of Demeter (Principle of Least Knowledge)',
        description:
          'An object should only communicate with its immediate neighbors. This leads to a more decoupled system.',
      },
      {
        title: 'Separation of Concerns',
        description:
          'Different functionalities should be separated into distinct sections or modules. This makes the system more modular.',
      },
    ];

    const result: CodingPrinciplesObject = {
      ready: true,
      principles: principlesYAML.map((principle) => ({
        title: principle.title,
        description: principle.description,
      })),
    };

    return result;
  },
});

// This is a selector family, which means it can take a parameter (in this case, the language)
export const loadYamlByLanguage = selectorFamily<LanguageObject, string>({
  key: 'loadYamlByLanguage',
  get:
    (language: string) =>
    async ({get}) => {
      const codingPrinciplesObject = get(loadCodingPrinciples);

      try {
        const response = await fetch(`/generated/languages/${language}.json`);

        const languageObject: LanguageYamlObject = await response.json();
        languageObject.principles = languageObject?.principles?.map((principle: CodingPrinciple) => {
          const fromPrinciplesObject =
            codingPrinciplesObject.principles?.find((item) => item.title === principle.title) || {};

          return {
            ...principle,
            ...fromPrinciplesObject,
          };
        });

        return {
          ready: true,
          languageObject,
        } as unknown as LanguageObject;
      } catch (error) {
        throw error; // Handle errors as needed, this will set the Recoil loadable to an error state
      }
    },
});
