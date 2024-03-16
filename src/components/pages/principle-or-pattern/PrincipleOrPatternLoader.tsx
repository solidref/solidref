// import {useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import {SetterOrUpdater, useRecoilValueLoadable} from 'recoil';

// import {loadPrincipleOrPattern} from '../../../selector';
// import {PrincipleOrPatternState} from '../../../state';

// export type PrinciplePatternContentParams = {
//   type?: string;
// };

// export type PrincipleOrPatterntLoaderProps = {
//   setPrinciplePatternContentState: SetterOrUpdater<PrincipleOrPatternState>;
// };

// TODO: Remove File!

export default function PrincipleOrPatternLoader(/*{setPrinciplePatternContentState}: PrincipleOrPatterntLoaderProps*/) {
  // const {type = 'solid'} = useParams<PrinciplePatternContentParams>();

  // const principleOrPattern = useRecoilValueLoadable(loadPrincipleOrPattern(type));

  // useEffect(() => {
  //   if (!principleOrPattern || principleOrPattern?.state !== 'hasValue' || !principleOrPattern?.contents?.ready) {
  //     return;
  //   }

  //   setPrinciplePatternContentState(principleOrPattern.contents);
  // }, [principleOrPattern, setPrinciplePatternContentState]);

  return <></>;
}
