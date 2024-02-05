import React, {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';

import {SetterOrUpdater, useRecoilState, useRecoilValueLoadable} from 'recoil';
import {loadLanguage, loadLanguages} from '../selector';
import {Language, LanguageState} from '../state';

export type LanguageParams = {
  language?: string;
};

export type LanguageLoaderProps = {
  code: string;
  setLanguagesState: SetterOrUpdater<LanguageState>;
};

function LanguageLoader({code, setLanguagesState}: LanguageLoaderProps) {
  const language = useRecoilValueLoadable(loadLanguage(code));

  useEffect(() => {
    if (language.state === 'hasValue') {
      setLanguagesState(language.contents);
    }
  }, [language, setLanguagesState]);

  return <></>;
}

export default LanguageLoader;
