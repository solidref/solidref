import React, {useEffect} from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';

import {LanguageHierarchyObject, languageMarkdownState} from '../state';
import {loadMarkdownByLanguage} from '../selector';
import SyntaxHighlighter from '../components/SyntaxHighlighter';

type Params = {
  language: string;
};

export type ByLanguageProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

function ByLanguage({languageHierarchy = {}}: ByLanguageProps) {
  const {language = 'javascript'} = useParams<Params>();

  const searchLanguage = `${
    languageHierarchy?.languageLink ? languageHierarchy?.languageLink[language] : 'javascript-javascript'
  }`;
  const [languageMarkdown, setLanguageMarkdown] = useRecoilState(languageMarkdownState);
  const languageMarkdownLoadable = useRecoilValueLoadable(loadMarkdownByLanguage(searchLanguage));

  useEffect(() => {
    if (languageMarkdownLoadable.state === 'hasValue') {
      setLanguageMarkdown({
        ...languageMarkdown,
        ...languageMarkdownLoadable.contents,
      });
    }
  }, [languageMarkdownLoadable.state]);

  const makeKey = (key: string): string => {
    return key.replace(/[^\w]+/gi, '-').toLowerCase();
  };

  const codeSample = (id: string) => {
    if (!languageMarkdown.ready) {
      return <>Loading ...</>;
    }

    // Find the starting index after the heading "Single Responsibility Principle (SRP)"
    const startIndex = languageMarkdown?.markdown?.children.findIndex(
      (child) =>
        child.type === 'heading' &&
        child.depth === 3 && // Assuming you want h3 headings
        makeKey(child?.children?.[0]?.value || '') === id,
    );

    // Find the ending index before the next heading of the same level (h3)
    const endIndex = languageMarkdown?.markdown?.children.findIndex(
      (child, index) =>
        index > (startIndex ?? 0) && // Start looking after the starting index
        child.type === 'heading' &&
        child.depth === 3, // Assuming you want h3 headings
    );

    // Slice the children array based on the found indices
    const slicedChildren = languageMarkdown?.markdown?.children.slice((startIndex ?? 0) + 1, endIndex);

    if (!slicedChildren?.length) {
      return <>Missing information</>;
    }

    return (
      <>
        {slicedChildren.map((c) => {
          switch (c.type) {
            case 'code':
              return <SyntaxHighlighter code={c.value || ''} language={c.lang || 'js'} />;
          }
        })}
      </>
    );
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
          <Grid item xs={12} id={'single-responsibility-principle-srp-'}>
            <h3>Single Responsibility Principle (SRP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              A class should have only one reason to change. This ensures that a class addresses only one concern,
              making the system more modular and easier to maintain.
            </p>
          </Grid>
          <Grid item xs={6} id={'single-responsibility-principle-srp--code'}>
            {codeSample('single-responsibility-principle-srp-')}
          </Grid>
          <Grid item xs={12} id={'open-closed-principle-ocp-'}>
            <h3>Open/Closed Principle (OCP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Software entities should be open for extension but closed for modification. This allows adding new
              features without altering existing code.
            </p>
          </Grid>
          <Grid item xs={6} id={'open-closed-principle-ocp--code'}>
            {codeSample('open-closed-principle-ocp-')}
          </Grid>
          <Grid item xs={12} id={'liskov-substitution-principle-lsp-'}>
            <h3>Liskov Substitution Principle (LSP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Subtypes must be substitutable for their base types. This ensures that a derived class is truly an
              extension of the base class.
            </p>
          </Grid>
          <Grid item xs={6} id={'liskov-substitution-principle-lsp--code'}>
            {codeSample('liskov-substitution-principle-lsp-')}
          </Grid>
          <Grid item xs={12} id={'interface-segregation-principle-isp-'}>
            <h3>Interface Segregation Principle (ISP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Clients should not be forced to depend on interfaces they do not use. This makes the system more modular
              and easier to understand.
            </p>
          </Grid>
          <Grid item xs={6} id={'interface-segregation-principle-isp--code'}>
            {codeSample('interface-segregation-principle-isp-')}
          </Grid>
          <Grid item xs={12} id={'dependency-inversion-principle-dip-'}>
            <h3>Dependency Inversion Principle (DIP)</h3>
          </Grid>

          <Grid item xs={6}>
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
          <Grid item xs={12} id={'dry-don-t-repeat-yourself-'}>
            <h3>DRY (Don&#039;t Repeat Yourself)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Every piece of knowledge or logic should exist in a single place. This reduces repetition and potential
              errors.
            </p>
          </Grid>
          <Grid item xs={6} id={'dry-don-t-repeat-yourself--code'}>
            {codeSample('dry-don-t-repeat-yourself-')}
          </Grid>
          <Grid item xs={12} id={'kiss-keep-it-simple-stupid-'}>
            <h3>KISS (Keep It Simple, Stupid)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>Systems work best when kept simple. Avoid unnecessary complexity.</p>
          </Grid>
          <Grid item xs={6} id={'kiss-keep-it-simple-stupid--code'}>
            {codeSample('kiss-keep-it-simple-stupid-')}
          </Grid>
          <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it-'}>
            <h3>YAGNI (You Aren&#039;t Gonna Need It)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>Avoid adding functionality until it&#039;s necessary. Prevents overengineering.</p>
          </Grid>
          <Grid item xs={6} id={'yagni-you-aren-t-gonna-need-it--code'}>
            {codeSample('yagni-you-aren-t-gonna-need-it-')}
          </Grid>
          <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge-'}>
            <h3>Law of Demeter (Principle of Least Knowledge)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              An object should only communicate with its immediate neighbors. This leads to a more decoupled system.
            </p>
          </Grid>
          <Grid item xs={6} id={'law-of-demeter-principle-of-least-knowledge--code'}>
            {codeSample('law-of-demeter-principle-of-least-knowledge-')}
          </Grid>
          <Grid item xs={12} id={'separation-of-concerns'}>
            <h3>Separation of Concerns</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Different functionalities should be separated into distinct sections or modules. This makes the system
              more modular.
            </p>

            <p>
              Different functionalities should be separated into distinct sections or modules. This makes the system
              more modular.
            </p>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </Box>
    </Page>
  );
}

export default ByLanguage;
