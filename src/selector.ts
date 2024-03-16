import {selector, selectorFamily} from 'recoil';
import {
  HierarchyLanguage,
  LanguagesHierarchyState,
  Language,
  LanguageState,
  PrincipleOrPatternState,
  PrincipleOrPatternContent,
} from './state';

export const loadLanguageHierarchy = selector<LanguagesHierarchyState>({
  key: 'loadLanguageHierarchy',
  get: async () => {
    try {
      const response = await fetch('/generated/hierarchy.json');
      if (!response.ok) {
        throw new Error('Failed to load language hierarchy.');
      }

      const list = (await response.json()) as HierarchyLanguage[];
      return {
        list,
        ready: true,
      };
    } catch (error) {
      console.error('Error fetching language hierarchy:', error);
    }
    return {
      list: [],
      ready: false,
    };
  },
});

export const loadLanguage = selectorFamily<LanguageState, string>({
  key: 'loadLanguage',
  get: (code) => async () => {
    try {
      const response = await fetch(`/generated/languages/${code}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load '${code}' language.`);
      }

      const language = (await response.json()) as Language;
      return {
        ready: true,
        language,
      };
    } catch (error) {
      console.error(`Error fetching '${code}' language:`, error);
    }
    return {
      ready: false,
    };
  },
});

export const loadPrincipleOrPattern = selectorFamily<PrincipleOrPatternState, string>({
  key: 'loadPrinciplePatternContent',
  get: (item) => async () => {
    try {
      const response = await fetch(`/generated/principles-patterns/${item}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load '${item}' principle/pattern`);
      }

      const content = (await response.json()) as PrincipleOrPatternContent;
      return {
        ready: true,
        content,
      };
    } catch (error) {
      console.error(`Error fetching '${item}' principle/pattern:`, error);
    }
    return {
      ready: false,
    };
  },
});
