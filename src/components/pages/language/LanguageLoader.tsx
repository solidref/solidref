import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {SetterOrUpdater, useRecoilValueLoadable} from 'recoil';
import {loadLanguage} from '../../../selector';
import {LanguageState} from '../../../state';

export type LanguageParams = {
  language?: string;
};

export type LanguageLoaderProps = {
  code?: string;
  setLanguagesState: SetterOrUpdater<LanguageState>;
};

export default function LanguageLoader({code, setLanguagesState}: LanguageLoaderProps) {
  // detect languageParam if not provided
  const {language: languageParam} = useParams<LanguageParams>();
  code = code ?? languageParam ?? 'javascript';

  // load language
  const language = useRecoilValueLoadable(loadLanguage(code));

  useEffect(() => {
    if (!language || language?.state !== 'hasValue' || !language?.contents?.ready) {
      return;
    }

    setLanguagesState(language.contents);
  }, [language, setLanguagesState]);

  return <></>;
}
