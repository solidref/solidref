import React from 'react';
import Page from '../../components/Page';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {CenteredToolbar} from '../../components/Header';
import Typography from '@mui/material/Typography';
import SvgIconByName from '../../icons/SvgIconByName';
import {styled} from '@mui/material';
import {loadLanguages} from '../../selector';
import LanguageLoader from '../../components/generic/LanguageLoader';
import ByPrinciplesOrPatterns from './by-language/ByPrinciplesOrPatterns';

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

function ByLanguage() {
  let {language = 'javascript'} = useParams<Params>();

  // const languages = useRecoilValue(languagesState);
  const [languageState, setLanguagesState] = useRecoilState(loadLanguages(language));

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <LanguageLoader code={language} setLanguagesState={setLanguagesState} />
      {languageState?.ready ? (
        <>
          <CenteredToolbar sx={{justifyContent: 'space-between'}}>
            <Typography variant="h2">
              <i>{languageState.language.name}</i> Coding Principles
            </Typography>
            <Typography variant="h6">
              Here are the <i>{languageState.language.name}</i> Coding Principles explained
            </Typography>
            <StyledSvgIconByName name={languageState.language.code ?? ''} />
          </CenteredToolbar>
          <Page>
            <Box sx={{flexGrow: 1}}>
              <ByPrinciplesOrPatterns language={languageState.language} />
            </Box>
          </Page>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default ByLanguage;
