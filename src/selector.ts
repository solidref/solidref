// selectors.js
import {selector, selectorFamily} from 'recoil';
import { LanguageHierarchy, LanguageHierarchyObject, MarkdownObject } from './state';

export const loadLanguageHierarchy = selector<LanguageHierarchyObject>({
  key: 'loadLanguageHierarchy',
  get: async () => {
    const response = await fetch('/generated/languages.json');
    const data = await response.json() as LanguageHierarchy;

    return {
      rootLanguages: Object.keys(data),
      languages: Object.keys(data)
              .map((l) => data[l])
              .reduce((acc, cur) => [...acc, ...cur], []),
      languageLink: Object.keys(data)
                          .map(l => data[l].map(ll => ({[ll] : `${l}-${ll}`})).reduce((acc, cur) => ({...acc, ...cur}), {}))
                          .reduce((acc, cur) => ({...acc, ...cur}), {})
    } as unknown as LanguageHierarchyObject
  },
});

// This is a selector family, which means it can take a parameter (in this case, the language)
export const loadMarkdownByLanguage = selectorFamily<MarkdownObject, string>({
  key: 'loadMarkdownByLanguage',
  get: (language: string) => async () => {
    try {
      const response = await fetch(`/generated/${language}.json`);
      const data: MarkdownObject = await response.json();
      return data;
    } catch (error) {
      throw error; // Handle errors as needed, this will set the Recoil loadable to an error state
    }
  },
});

