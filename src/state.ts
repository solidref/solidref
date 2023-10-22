import {atom} from 'recoil';

export type LanguageItem = {
  children?: string[];
  birth: string;
  death: string;
  code?: string;
};

export type LanguageHierarchy = {
  [key: string]: LanguageItem;
};

export type LanguageHierarchyObject = {
  ready?: boolean;
  rootLanguages?: string[];
  allLanguages?: string[];
  hierarchy?: LanguageHierarchy;
};

export const languageHierarchyState = atom<LanguageHierarchyObject>({
  key: 'languageHierarchy',
  default: {}, // default empty object
});

export type CodeExample = {
  title?: string;
  code?: string;
};

export type CodingPrinciple = {
  title: string;
  description?: string;
  examples?: CodeExample[];
};

export type CodingPrinciplesObject = {
  ready?: boolean;
  principles?: CodingPrinciple[];
};

export const codingPrinciplesState = atom<CodingPrinciplesObject>({
  key: 'arrayOfCondingPrincipleGroup',
  default: {}, // default empty array
});

export type LanguageYamlObject = {
  language?: string;
  code?: string;
  parent?: string;
  birth?: number;
  death?: number;
  description?: string;
  principles?: CodingPrinciple[];
};

export type LanguageObject = {
  ready?: boolean;
  languageObject?: LanguageYamlObject;
};

export const languageObjectState = atom<LanguageObject>({
  key: 'arrayOfStructuresState',
  default: {}, // default empty array
});
