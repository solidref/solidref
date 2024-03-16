import {atom} from 'recoil';
import {TypographyProps} from '@mui/material/Typography';
import {DefaultSelectedLanguageCode, LocalStorageSelectedLanguageCodeLabel} from './constants';

/**
 * Base Types
 */

export type ReferenceArticle = {
  author: string;
  authorUrl?: string;
  title: string;
  url: string;
};

export type ReferencesType = {
  list: ReferenceArticle[];
  variant: 'references';
};

export type ContentType = {
  content?: string;
  // same variants as Typography MUI
  variant?: TypographyProps['variant'] | 'code';
};

export type CodeExample = {
  code?: string;
  title?: string;
};

export type CodingPrinciple = {
  description?: ContentType[];
  examples?: CodeExample[];
  title: string;
  // type: 'solid' | 'other' | 'proprietary';
};

export type DesignPattern = {
  description?: ContentType[];
  examples: CodeExample[];
  title: string;
  // type: 'behavioural' | 'creational' | 'structural' | 'proprietary';
};

/**
 * Complex types for States
 */

export type CodingPrincipleType = 'proprietary' | 'other' | 'solid';

export type CodingPrinciples = Record<CodingPrincipleType, CodingPrinciple[]>;

export type DesignPatternType = 'behavioural' | 'creational' | 'structural' | 'proprietary';

export type DesignPatterns = Record<DesignPatternType, DesignPattern[]>;

export type Language = {
  birth?: number;
  code: string;
  death?: number;
  description?: string;
  inspiredBy?: string[];
  inspiring?: string[];
  name: string;
  patterns?: DesignPatterns;
  principles?: CodingPrinciples;
};

export interface HierarchyLanguage extends Omit<Language, 'patterns' & 'principles'> {
  url: string;
}

export const DefaultMessageTtl = 5000;

export type MessageType = 'error' | 'warning' | 'success';

export type Message = {
  id: string;
  message: string;
  ttl: number;
  type: MessageType;
};

/**
 * States
 */

export type StateReadiness = {
  ready?: boolean;
};

/**
 * Hierarchy Languages State
 */
export interface LanguagesHierarchyState extends StateReadiness {
  list?: HierarchyLanguage[];
}

export const languagesHierarchyState = atom<LanguagesHierarchyState>({
  key: 'hierarchyLanguages',
  default: {}, // default empty object
});

/**
 * Selected Language State
 */

export const selectedLanguageCodeState = atom<string | null>({
  key: 'SelectedLanguage',
  default: (localStorage.getItem(LocalStorageSelectedLanguageCodeLabel) as string) || DefaultSelectedLanguageCode,
});

/**
 * Language State
 */

export type LanguageState = StateReadiness & {
  language?: Language;
};

/**
 * Languages State
 */

// TODO: this is a concept that was not yet introduced

// export type LanguagesState = Record<string, LanguageState>;

// export const languagesState = atom<LanguagesState>({
//   key: 'languagesState',
//   default: {},
// });

/**
 * Principle or Pattern State
 */

export interface PrincipleOrPatternContent {
  title: string;
  before?: ContentType[];
  after?: ContentType[];
  accordion?: Record<string, ContentType[]>;
}

export type PrincipleOrPatternState = StateReadiness & {
  content?: PrincipleOrPatternContent;
};

export const principleOrPatternState = atom<PrincipleOrPatternState>({
  key: 'principleOrPatternState',
  default: {},
});
