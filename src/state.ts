import {atom} from 'recoil';

export type LanguageHierarchy = {
  [key: string]: string[];
};

export type LanguageHierarchyObject = {
  ready?: boolean;
  rootLanguages?: string[];
  languages?: string[];
  languageLink?: {[key: string]: string[]};
};

export const languageHierarchyState = atom<LanguageHierarchyObject>({
  key: 'languageHierarchy',
  default: {}, // default empty object
});

export interface MarkdownTreeNode {
  type: string;
  children?: MarkdownTreeNode[];
  depth?: number;
  value?: string;
  lang?: string;
  // Add other properties as needed
}

export interface MarkdownRootNode {
  type: 'root';
  children: MarkdownTreeNode[];
}

export type LanguageMarkdownObject = {
  ready?: boolean;
  markdown?: MarkdownRootNode;
};

export const languageMarkdownState = atom<LanguageMarkdownObject>({
  key: 'arrayOfStructuresState',
  default: {}, // default empty array
});
