import {atom} from 'recoil';
import {TypographyProps} from '@mui/material/Typography';

export type CodeExample = {
  code?: string;
  title?: string;
};

export type CodingPrinciple = {
  abbr: string;
  description?: string;
  examples?: CodeExample[];
  title?: string;
  type: 'solid' | 'proprietary';
};

export type CodingPrinciples = {
  proprietary?: CodingPrinciple[];
  solid?: CodingPrinciple[];
};

export type DesignPattern = {
  abbr: string;
  description?: string;
  examples: CodeExample[];
  title?: string;
  type: 'behavioural' | 'creational' | 'structural';
};

export type DesignPatterns = {
  behavioural?: DesignPattern[];
  creational?: DesignPattern[];
  structural?: DesignPattern[];
};

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
 * Hierarchy Languages State
 */

export type LanguageState = StateReadiness & {
  language: Language;
};

export type LanguagesState = Record<string, LanguageState>;

export const languagesState = atom<LanguagesState>({
  key: 'languagesState',
  default: {},
});

/**
 * Content State
 */

export interface ContentType {
  content?: string;
  variant?: TypographyProps['variant'] | 'code';
}

export interface PrinciplePatternContent {
  title: string;
  before?: ContentType[];
  after?: ContentType[];
  accordion?: Record<string, ContentType[]>;
}

export type PrinciplePatternContentState = StateReadiness & {
  content?: PrinciplePatternContent;
};

export const principlePatternContentState = atom<PrinciplePatternContentState>({
  key: 'contentState',
  default: {},
});

/**
 * Messages State
 */

export interface MessagesState extends StateReadiness {
  messages: Message[];
}

export const messagesState = atom<MessagesState>({
  key: 'messagesState',
  default: {
    messages: [],
  }, // default empty array
});
