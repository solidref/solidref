import React, {useEffect} from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';

import {LanguageHierarchyObject, languageObjectState} from '../state';
import {loadYamlByLanguage} from '../selector';
import SyntaxHighlighter from '../components/SyntaxHighlighter';

type Params = {
  language: string;
};

export type ByLanguageProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

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

  const codeSample = (id: string) => {
    if (!languageObject.ready) {
      return <>Loading ...</>;
    }

    const principle = languageObject?.languageObject?.principles?.find(({title}) => makeKey(title || '') === id);

    if (!principle) {
      return <>Missing information</>;
    }
    return <SyntaxHighlighter code={principle?.code || ''} language={languageObject?.languageObject?.code || 'js'} />;
  };

  return (
    <Page>
      <Box sx={{flexGrow: 1}}>
        <Grid item xs={12}>
          <h1>
            Coding principles under <i>{language}</i>
          </h1>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>SOLID Principles</h2>
          </Grid>
          <Grid item xs={12} id={'single-responsibility-principle-srp--head'}>
            <h3>Single Responsibility Principle (SRP)</h3>
          </Grid>

          <Grid item xs={6} id={'single-responsibility-principle-srp--desc'}>
            <p>
              A class should have only one reason to change. This ensures that a class addresses only one concern,
              making the system more modular and easier to maintain.
            </p>
          </Grid>
          <Grid item xs={6} id={'single-responsibility-principle-srp--code'}>
            {codeSample('single-responsibility-principle-srp-')}
          </Grid>
          <Grid item xs={12} id={'open-closed-principle-ocp--head'}>
            <h3>Open/Closed Principle (OCP)</h3>
          </Grid>

          <Grid item xs={6} id={'open-closed-principle-ocp--desc'}>
            <p>
              Software entities should be open for extension but closed for modification. This allows adding new
              features without altering existing code.
            </p>
          </Grid>
          <Grid item xs={6} id={'open-closed-principle-ocp--code'}>
            {codeSample('open-closed-principle-ocp-')}
          </Grid>
          <Grid item xs={12} id={'liskov-substitution-principle-lsp--head'}>
            <h3>Liskov Substitution Principle (LSP)</h3>
          </Grid>

          <Grid item xs={6} id={'liskov-substitution-principle-lsp--desc'}>
            <p>
              Subtypes must be substitutable for their base types. This ensures that a derived class is truly an
              extension of the base class.
            </p>
          </Grid>
          <Grid item xs={6} id={'liskov-substitution-principle-lsp--code'}>
            {codeSample('liskov-substitution-principle-lsp-')}
          </Grid>
          <Grid item xs={12} id={'interface-segregation-principle-isp--head'}>
            <h3>Interface Segregation Principle (ISP)</h3>
          </Grid>

          <Grid item xs={6} id={'interface-segregation-principle-isp--desc'}>
            <p>
              Clients should not be forced to depend on interfaces they do not use. This makes the system more modular
              and easier to understand.
            </p>
          </Grid>
          <Grid item xs={6} id={'interface-segregation-principle-isp--code'}>
            {codeSample('interface-segregation-principle-isp-')}
          </Grid>
          <Grid item xs={12} id={'dependency-inversion-principle-dip--head'}>
            <h3>Dependency Inversion Principle (DIP)</h3>
          </Grid>

          <Grid item xs={6} id={'dependency-inversion-principle-dip--desc'}>
            <p>
              High-level modules should not depend on low-level modules; both should depend on abstractions. This
              decouples software modules.
            </p>
          </Grid>
          <Grid item xs={6} id={'dependency-inversion-principle-dip--code'}>
            {codeSample('dependency-inversion-principle-dip-')}
          </Grid>
          <Grid item xs={12}>
            <h2>Other Principles</h2>
          </Grid>
          <Grid item xs={12} id={'dry-don-t-repeat-yourself--head'}>
            <h3>DRY (Don&#039;t Repeat Yourself)</h3>
          </Grid>

          <Grid item xs={6} id={'dry-don-t-repeat-yourself--desc'}>
            <p>
              Every piece of knowledge or logic should exist in a single place. This reduces repetition and potential
              errors.
            </p>
          </Grid>
          <Grid item xs={6} id={'dry-don-t-repeat-yourself--code'}>
            {codeSample('dry-don-t-repeat-yourself-')}
          </Grid>
          <Grid item xs={12} id={'kiss-keep-it-simple-stupid--head'}>
            <h3>KISS (Keep It Simple, Stupid)</h3>
          </Grid>

          <Grid item xs={6} id={'kiss-keep-it-simple-stupid--desc'}>
            <p>Systems work best when kept simple. Avoid unnecessary complexity.</p>
          </Grid>
          <Grid item xs={6} id={'kiss-keep-it-simple-stupid--code'}>
            {codeSample('kiss-keep-it-simple-stupid-')}
          </Grid>
          <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it--head'}>
            <h3>YAGNI (You Aren&#039;t Gonna Need It)</h3>
          </Grid>

          <Grid item xs={6} id={'yagni-you-aren-t-gonna-need-it--desc'}>
            <p>Avoid adding functionality until it&#039;s necessary. Prevents over-engineering.</p>
          </Grid>
          <Grid item xs={6} id={'yagni-you-aren-t-gonna-need-it--code'}>
            {codeSample('yagni-you-aren-t-gonna-need-it-')}
          </Grid>
          <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge--head'}>
            <h3>Law of Demeter (Principle of Least Knowledge)</h3>
          </Grid>

          <Grid item xs={6} id={'law-of-demeter-principle-of-least-knowledge--desc'}>
            <p>
              An object should only communicate with its immediate neighbors. This leads to a more decoupled system.
            </p>
          </Grid>
          <Grid item xs={6} id={'law-of-demeter-principle-of-least-knowledge--code'}>
            {codeSample('law-of-demeter-principle-of-least-knowledge-')}
          </Grid>
          <Grid item xs={12} id={'separation-of-concerns-head'}>
            <h3>Separation of Concerns</h3>
          </Grid>

          <Grid item xs={6} id={'separation-of-concerns-desc'}>
            <p>
              Different functionalities should be separated into distinct sections or modules. This makes the system
              more modular.
            </p>
          </Grid>
          <Grid item xs={6} id={'separation-of-concerns-code'}>
            {codeSample('separation-of-concerns')}
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

export default ByLanguage;
