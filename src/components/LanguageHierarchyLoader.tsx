import React, { useEffect } from 'react';

import { SetterOrUpdater, useRecoilValue } from 'recoil';
import { loadLanguageHierarchy } from '../selector';
import { LanguagesHierarchyState } from '../state';

export type LanguageHierarchyLoaderProps = {
  setLanguagesHierarchyState: SetterOrUpdater<LanguagesHierarchyState>;
};

function LanguageHierarchyLoader({ setLanguagesHierarchyState }: LanguageHierarchyLoaderProps) {
  const languageHierarchy = useRecoilValue(loadLanguageHierarchy);

  useEffect(() => {
    setLanguagesHierarchyState(languageHierarchy);
    // console.log(languageHierarchy);
  }, [languageHierarchy, setLanguagesHierarchyState]);

  return <></>;
}

export default LanguageHierarchyLoader;
