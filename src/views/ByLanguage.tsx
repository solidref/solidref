import React, {useEffect} from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValue, useRecoilValueLoadable} from 'recoil';

import {CodingPrinciple, LanguagesHierarchyState, languagesHierarchyState} from '../state';
import CodeExampleAccordion from '../components/code/CodeExampleAccordion';
import {CenteredToolbar} from '../components/Header';
import Typography from '@mui/material/Typography';
import SvgIconByName from '../icons/SvgIconByName';
import {styled} from '@mui/material';
import {denormalizeLanguageName} from '../utils/language';

type Params = {
  language: string;
};

export type ByLanguageProps = {};

export const StyledSvgIconByName = styled(SvgIconByName)(({theme}) => ({
  width: '100px',
  height: '100px',
  transform: 'rotate(-15deg)',

  '&.GenericCodeIcon': {
    fill: theme.palette.primary.light,
  },
}));

export const Principle = styled('div')(({theme}) => ({
  background: theme.palette.primary.light,
  borderRadius: 10,
  padding: '10px',
}));

function ByLanguage() {
  // let {language = 'javascript'} = useParams<Params>();

  // const searchLanguage = `${language}`;

  // const codingPrinciplesObjectLoadable = useRecoilValueLoadable(codingPrinciplesState);
  // useRecoilState<CodingPrinciplesObject>(codingPrinciplesState);

  // const [languageObject, setLanguageObject] = useRecoilState<LanguageObject>(languageObjectState);
  // const languageObjectLoadable = useRecoilValueLoadable(loadYamlByLanguage(searchLanguage));

  // useEffect(() => {
  //   if (languageObjectLoadable.state === 'hasValue' && codingPrinciplesObjectLoadable.state === 'hasValue') {
  //     setLanguageObject({
  //       ...languageObject,
  //       ...languageObjectLoadable.contents,
  //     });
  //   }
  // }, [languageObjectLoadable.state, codingPrinciplesObjectLoadable.state]);

  // const makeKey = (key: string): string => {
  //   return key.replace(/[^\w]+/gi, '-').toLowerCase();
  // };

  // const renderCodeSamples = (principle: CodingPrinciple) => {
  //   return (
  //     <CodeExampleAccordion
  //       examples={principle?.examples || []}
  //       language={languageObject?.languageObject?.code || 'js'}
  //     />
  //   );
  // };

  // const renderPrinciple = (principle: CodingPrinciple) => {
  //   return (
  //     <Grid item xs={12} sm={6} key={makeKey(principle.title)} id={makeKey(principle.title)}>
  //       <Principle>
  //         <h3>{principle.title}</h3>
  //         <p>{principle.description}</p>
  //         {renderCodeSamples(principle)}
  //       </Principle>
  //     </Grid>
  //   );
  // };

  // const renderPrinciples = () => {
  //   return (
  //     <Grid container columns={12} spacing={4}>
  //       {languageObject?.languageObject?.principles?.map((principle) => renderPrinciple(principle))}
  //     </Grid>
  //   );
  // };

  // return (
  //   <>
  //     <CenteredToolbar sx={{justifyContent: 'space-between'}}>
  //       <Typography variant="h2">
  //         <i>{languageObject?.languageObject?.language}</i> Coding Principles
  //       </Typography>
  //       <Typography variant="h6">
  //         Here are the <i>{languageObject?.languageObject?.language}</i> Coding Principles explained
  //       </Typography>
  //       <StyledSvgIconByName name={languageObject?.languageObject?.code ?? ''} />
  //     </CenteredToolbar>
  //     <Page>
  //       <Box sx={{flexGrow: 1}}>{renderPrinciples()}</Box>
  //     </Page>
  //   </>
  // );

  return <></>;
}

export default ByLanguage;
