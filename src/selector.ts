// selectors.js
import {selector, selectorFamily} from 'recoil';
import {LanguageHierarchy, LanguageHierarchyObject, LanguageObject, LanguageYamlObject} from './state';

export const loadLanguageHierarchy = selector<LanguageHierarchyObject>({
  key: 'loadLanguageHierarchy',
  get: async () => {
    const response = await fetch('/generated/languages.json');
    const data = (await response.json()) as LanguageHierarchy;

    return {
      ready: true,
      rootLanguages: Object.keys(data),
      allLanguages: Object.keys(data)
        .map((l) => [l, ...(data[l].children ?? [])])
        .reduce((acc, cur) => [...new Set([...acc, ...cur])].sort(), []),
      hierarchy: data,
    } as unknown as LanguageHierarchyObject;
  },
});

// This is a selector family, which means it can take a parameter (in this case, the language)
export const loadYamlByLanguage = selectorFamily<LanguageObject, string>({
  key: 'loadYamlByLanguage',
  get: (language: string) => async () => {
    try {
      const response = await fetch(`/generated/languages/${language}.json`);
      const languageObject: LanguageYamlObject = await response.json();
      return {
        ready: true,
        languageObject,
      } as unknown as LanguageObject;
    } catch (error) {
      throw error; // Handle errors as needed, this will set the Recoil loadable to an error state
    }
  },
});
