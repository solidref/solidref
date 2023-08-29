import {atom} from 'recoil';

export type LanguageHierarchy = {
  [key: string]: string[];
}

export type LanguageHierarchyObject = {
  rootLanguages?: string[];
  languages?: string[];
  languageLink?: {[key: string]: string[]};
}

export const languageHierarchyState = atom<LanguageHierarchyObject>({
  key: 'languageHierarchy',
  default: {
  }, // default empty object
});

export type MarkdownObject = {
  [key: string]: any,
}

export type LanguageMarkdownsObject = {
  [key: string]: MarkdownObject,
}

export const languageMarkdownsState = atom<LanguageMarkdownsObject>({
  key: 'arrayOfStructuresState',
  default: {}, // default empty array
});
