import React, {useEffect} from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';

import {LanguageHierarchyObject, languageObjectState} from '../state';
import {loadYamlByLanguage} from '../selector';
import CodeExampleAccordion from '../components/code/CodeExampleAccordion';
import {CenteredToolbar} from '../components/Header';
import Typography from '@mui/material/Typography';
import SvgIconByName from '../icons/SvgIconByName';
import {styled} from '@mui/material';

type Params = {
  language: string;
};

export type ByLanguageProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

export const StyledSvgIconByName = styled(SvgIconByName)(({theme}) => ({
  width: '100px',
  height: '100px',
  transform: 'rotate(-15deg)',

  '&.GenericCodeIcon': {
    fill: theme.palette.primary.light,
  },
}));

function ByLanguage({languageHierarchy = {}}: ByLanguageProps) {
  const {language = 'javascript'} = useParams<Params>();

  const searchLanguage = `${language}`;
  const [languageObject, setLanguageObject] = useRecoilState(languageObjectState);
  const languageObjectLoadable = useRecoilValueLoadable(loadYamlByLanguage(searchLanguage));

  useEffect(() => {
    if (languageObjectLoadable.state === 'hasValue') {
      setLanguageObject({
        ...languageObject,
        ...languageObjectLoadable.contents,
      });
    }
  }, [languageObjectLoadable.state]);

  const makeKey = (key: string): string => {
    return key.replace(/[^\w]+/gi, '-').toLowerCase();
  };

  const renderCodeSamples = (id: string) => {
    if (!languageObject.ready) {
      return <>Loading ...</>;
    }

    const principle = languageObject?.languageObject?.principles?.find(({title}) => makeKey(title || '') === id);

    if (!principle) {
      return <>Missing information</>;
    }
    return (
      <CodeExampleAccordion
        examples={principle?.examples || []}
        language={languageObject?.languageObject?.code || 'js'}
      />
    );
  };

  return (
    <>
      <CenteredToolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h2">
          <i>{languageObject?.languageObject?.language}</i> Coding Principles
        </Typography>
        <Typography variant="h6">
          Here are the <i>{languageObject?.languageObject?.language}</i> Coding Principles explained
        </Typography>
        <StyledSvgIconByName name={languageObject?.languageObject?.code ?? ''} />
      </CenteredToolbar>
      <Page>
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>SOLID Principles</h2>
            </Grid>
            <Grid item xs={12} id={'single-responsibility-principle-srp--head'}>
              <h3>Single Responsibility Principle (SRP)</h3>
            </Grid>

            <Grid item xs={12} id={'single-responsibility-principle-srp--desc'}>
              <p>
                A class should have only one reason to change. This ensures that a class addresses only one concern,
                making the system more modular and easier to maintain.
              </p>
            </Grid>
            <Grid item xs={12} id={'single-responsibility-principle-srp--code'}>
              {renderCodeSamples('single-responsibility-principle-srp-')}
            </Grid>
            <Grid item xs={12} id={'open-closed-principle-ocp--head'}>
              <h3>Open/Closed Principle (OCP)</h3>
            </Grid>

            <Grid item xs={12} id={'open-closed-principle-ocp--desc'}>
              <p>
                Software entities should be open for extension but closed for modification. This allows adding new
                features without altering existing code.
              </p>
            </Grid>
            <Grid item xs={12} id={'open-closed-principle-ocp--code'}>
              {renderCodeSamples('open-closed-principle-ocp-')}
            </Grid>
            <Grid item xs={12} id={'liskov-substitution-principle-lsp--head'}>
              <h3>Liskov Substitution Principle (LSP)</h3>
            </Grid>

            <Grid item xs={12} id={'liskov-substitution-principle-lsp--desc'}>
              <p>
                Subtypes must be substitutable for their base types. This ensures that a derived class is truly an
                extension of the base class.
              </p>
            </Grid>
            <Grid item xs={12} id={'liskov-substitution-principle-lsp--code'}>
              {renderCodeSamples('liskov-substitution-principle-lsp-')}
            </Grid>
            <Grid item xs={12} id={'interface-segregation-principle-isp--head'}>
              <h3>Interface Segregation Principle (ISP)</h3>
            </Grid>

            <Grid item xs={12} id={'interface-segregation-principle-isp--desc'}>
              <p>
                Clients should not be forced to depend on interfaces they do not use. This makes the system more modular
                and easier to understand.
              </p>
            </Grid>
            <Grid item xs={12} id={'interface-segregation-principle-isp--code'}>
              {renderCodeSamples('interface-segregation-principle-isp-')}
            </Grid>
            <Grid item xs={12} id={'dependency-inversion-principle-dip--head'}>
              <h3>Dependency Inversion Principle (DIP)</h3>
            </Grid>

            <Grid item xs={12} id={'dependency-inversion-principle-dip--desc'}>
              <p>
                High-level modules should not depend on low-level modules; both should depend on abstractions. This
                decouples software modules.
              </p>
            </Grid>
            <Grid item xs={12} id={'dependency-inversion-principle-dip--code'}>
              {renderCodeSamples('dependency-inversion-principle-dip-')}
            </Grid>
            <Grid item xs={12}>
              <h2>Other Principles</h2>
            </Grid>
            <Grid item xs={12} id={'dry-don-t-repeat-yourself--head'}>
              <h3>DRY (Don&#039;t Repeat Yourself)</h3>
            </Grid>

            <Grid item xs={12} id={'dry-don-t-repeat-yourself--desc'}>
              <p>
                Every piece of knowledge or logic should exist in a single place. This reduces repetition and potential
                errors.
              </p>
            </Grid>
            <Grid item xs={12} id={'dry-don-t-repeat-yourself--code'}>
              {renderCodeSamples('dry-don-t-repeat-yourself-')}
            </Grid>
            <Grid item xs={12} id={'kiss-keep-it-simple-stupid--head'}>
              <h3>KISS (Keep It Simple, Stupid)</h3>
            </Grid>

            <Grid item xs={12} id={'kiss-keep-it-simple-stupid--desc'}>
              <p>Systems work best when kept simple. Avoid unnecessary complexity.</p>
            </Grid>
            <Grid item xs={12} id={'kiss-keep-it-simple-stupid--code'}>
              {renderCodeSamples('kiss-keep-it-simple-stupid-')}
            </Grid>
            <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it--head'}>
              <h3>YAGNI (You Aren&#039;t Gonna Need It)</h3>
            </Grid>

            <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it--desc'}>
              <p>Avoid adding functionality until it&#039;s necessary. Prevents over-engineering.</p>
            </Grid>
            <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it--code'}>
              {renderCodeSamples('yagni-you-aren-t-gonna-need-it-')}
            </Grid>
            <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge--head'}>
              <h3>Law of Demeter (Principle of Least Knowledge)</h3>
            </Grid>

            <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge--desc'}>
              <p>
                An object should only communicate with its immediate neighbors. This leads to a more decoupled system.
              </p>
            </Grid>
            <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge--code'}>
              {renderCodeSamples('law-of-demeter-principle-of-least-knowledge-')}
            </Grid>
            <Grid item xs={12} id={'separation-of-concerns-head'}>
              <h3>Separation of Concerns</h3>
            </Grid>

            <Grid item xs={12} id={'separation-of-concerns-desc'}>
              <p>
                Different functionalities should be separated into distinct sections or modules. This makes the system
                more modular.
              </p>
            </Grid>
            <Grid item xs={12} id={'separation-of-concerns-code'}>
              {renderCodeSamples('separation-of-concerns')}
            </Grid>
          </Grid>
        </Box>
      </Page>
    </>
  );
}

export default ByLanguage;
