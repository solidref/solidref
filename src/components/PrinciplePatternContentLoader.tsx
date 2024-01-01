import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {SetterOrUpdater, useRecoilValueLoadable} from 'recoil';
import {loadPrinciplePatternContent} from '../selector';
import {PrinciplePatternContentState} from '../state';

export type PrinciplePatternContentParams = {
  type?: string;
};

export type PrinciplePatternContentLoaderProps = {
  setPrinciplePatternContentState: SetterOrUpdater<PrinciplePatternContentState>;
};

function PrinciplePatternContentLoader({setPrinciplePatternContentState}: PrinciplePatternContentLoaderProps) {
  const {type = 'solid'} = useParams<PrinciplePatternContentParams>();

  const principlePatternContent = useRecoilValueLoadable(loadPrinciplePatternContent(type));

  useEffect(() => {
    if (principlePatternContent.state === 'hasValue') {
      setPrinciplePatternContentState(principlePatternContent.contents);
    }
  }, [principlePatternContent, setPrinciplePatternContentState]);

  return <></>;
}

export default PrinciplePatternContentLoader;
