import React, {useEffect} from 'react';

import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {loadLanguageHierarchy} from '../../selector';

export type LanguageHierarchyLoaderProps = {
};

function LanguageHierarchyLoader({}: LanguageHierarchyLoaderProps) {
  // const [languageHierarchy, setLanguageHierarchy] = useRecoilState(languageHierarchyState);
  // const languageHierarchyLoadable = useRecoilValueLoadable(loadLanguageHierarchy);

  // useEffect(() => {
  //   if (languageHierarchyLoadable.state === 'hasValue') {
  //     setLanguageHierarchy({
  //       ...languageHierarchy,
  //       ...languageHierarchyLoadable.contents,
  //     });
  //     exportLanguageHierarchy({
  //       ...languageHierarchy,
  //       ...{ready: true},
  //       ...languageHierarchyLoadable.contents,
  //     });
  //   }
  // }, [languageHierarchyLoadable.state]);

  return <></>;
}

export default LanguageHierarchyLoader;
