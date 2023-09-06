import React, {useEffect} from 'react';

import {languageHierarchyState, LanguageHierarchyObject} from '../../state';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {loadLanguageHierarchy} from '../../selector';

export type LanguageHierarchyLoaderProps = {
  exportLanguageHierarchy: (value: LanguageHierarchyObject) => void;
};

function LanguageHierarchyLoader({exportLanguageHierarchy}: LanguageHierarchyLoaderProps) {
  const [languageHierarchy, setLanguageHierarchy] = useRecoilState(languageHierarchyState);
  const languageHierarchyLoadable = useRecoilValueLoadable(loadLanguageHierarchy);

  useEffect(() => {
    if (languageHierarchyLoadable.state === 'hasValue') {
      setLanguageHierarchy({
        ...languageHierarchy,
        ...languageHierarchyLoadable.contents,
      });
      exportLanguageHierarchy({
        ...languageHierarchy,
        ...{ready: true},
        ...languageHierarchyLoadable.contents,
      });
    }
  }, [languageHierarchyLoadable.state]);

  return <></>;
}

export default LanguageHierarchyLoader;
