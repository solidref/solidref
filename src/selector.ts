import {GetRecoilValue, RecoilState, selector, selectorFamily} from 'recoil';
import {
  DefaultMessageTtl,
  HierarchyLanguage,
  LanguagesHierarchyState,
  Language,
  languagesHierarchyState,
  LanguagesState,
  languagesState,
  Message,
  MessagesState,
  messagesState,
  LanguageState,
} from './state';
import {id} from './utils/id';

// Function to add a message with TTL
function addMessageWithTTL(
  set: (recoilVal: RecoilState<MessagesState>, newVal: (prevVal: MessagesState) => MessagesState) => void,
  message: Omit<Message, 'id' | 'ttl'> & {ttl?: number; id?: string},
) {
  // ensure ttl
  message = {
    id: id(),
    ttl: DefaultMessageTtl,
    ...message,
  };
  // add message
  set(messagesState, (prev) => ({
    ...prev,
    messages: [...prev.messages, message as Message],
  }));
  // remove message after TTL
  setTimeout(() => {
    set(messagesState, (prev: MessagesState) => ({
      ...prev,
      messages: prev.messages.filter((m: Message) => m.id !== message.id),
    }));
  }, message.ttl);
}

export const loadLanguageHierarchy = selector<LanguagesHierarchyState>({
  key: 'loadLanguageHierarchy',
  get: async ({get, set}: any) => {
    console.log('Loading language hierarchy');
    try {
      const response = await fetch('/generated/hierarchy.json');
      if (!response.ok) {
        throw new Error('Failed to load language hierarchy.');
      }

      const list = (await response.json()) as HierarchyLanguage[];
      return {
        ready: true,
        list,
      };
    } catch (error) {
      console.error('Error fetching language hierarchy:', error);
      return {
        ...get(languagesHierarchyState),
        ready: false,
      };
    }
  },
});

export const loadLanguages = selectorFamily<LanguageState, string>({
  key: 'loadLanguages',
  get:
    (code) =>
    ({get}) =>
      get(languagesState)[code],
  set:
    (code) =>
    ({set}, newValue) =>
      set(languagesState, (prevState) => ({
        ...prevState,
        [code]: newValue as LanguageState,
      })),
});

export const loadLanguage = selectorFamily<LanguageState, string>({
  key: 'loadLanguage',
  get:
    (code) =>
    async ({get}: any) => {
      console.log(`Loading ${code} language`);
      try {
        const response = await fetch(`/generated/languages/${code}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load '${code}' language.`);
        }

        const language = (await response.json()) as Language[];
        return {
          ready: true,
          language,
        };
      } catch (error) {
        console.error(`Error fetching '${code}' language:`, error);
        return {
          ...get(languagesState)[code],
          ready: false,
        };
      }
    },
});

// selector for adding messages
export const addMessageSelector = selector<MessagesState>({
  key: 'addMessageSelector',
  get: ({get}: any) => get(messagesState),
  set: ({set}: any, message: Message) => {
    addMessageWithTTL(set, message);
  },
} as any);
