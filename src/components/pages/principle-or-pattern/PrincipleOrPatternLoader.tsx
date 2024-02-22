import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {SetterOrUpdater, useRecoilValueLoadable} from 'recoil';

import {loadPrinciplePatternContent} from '../../../selector';
import {PrinciplePatternState} from '../../../state';

export type PrinciplePatternContentParams = {
  type?: string;
};

export type PrincipleOrPatterntLoaderProps = {
  setPrinciplePatternContentState: SetterOrUpdater<PrinciplePatternState>;
};

export default function PrincipleOrPatternLoader({setPrinciplePatternContentState}: PrincipleOrPatterntLoaderProps) {
  const {type = 'solid'} = useParams<PrinciplePatternContentParams>();

  const principleOrPattern = useRecoilValueLoadable(loadPrinciplePatternContent(type));

  useEffect(() => {
    if (!principleOrPattern || principleOrPattern?.state !== 'hasValue' || !principleOrPattern?.contents?.ready) {
      return;
    }

    setPrinciplePatternContentState(principleOrPattern.contents);
  }, [principleOrPattern, setPrinciplePatternContentState]);

  return <></>;
}
