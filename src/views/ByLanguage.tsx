import React from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ByLanguage: React.FC = () => {
  return (
    <Page>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p>A collection of widely-accepted coding principles that guide software design and development.</p>
          </Grid>
          <Grid item xs={6} id={'solid-principles-code'} />
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
          <Grid item xs={6} id={'open-closed-principle-ocp--code'} />
          <Grid item xs={12} id={'open-closed-principle-ocp-'}>
            <h3>Open/Closed Principle (OCP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Software entities should be open for extension but closed for modification. This allows adding new
              features without altering existing code.
            </p>
          </Grid>
          <Grid item xs={6} id={'liskov-substitution-principle-lsp--code'} />
          <Grid item xs={12} id={'liskov-substitution-principle-lsp-'}>
            <h3>Liskov Substitution Principle (LSP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Subtypes must be substitutable for their base types. This ensures that a derived class is truly an
              extension of the base class.
            </p>
          </Grid>
          <Grid item xs={6} id={'interface-segregation-principle-isp--code'} />
          <Grid item xs={12} id={'interface-segregation-principle-isp-'}>
            <h3>Interface Segregation Principle (ISP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              Clients should not be forced to depend on interfaces they do not use. This makes the system more modular
              and easier to understand.
            </p>
          </Grid>
          <Grid item xs={6} id={'dependency-inversion-principle-dip--code'} />
          <Grid item xs={12} id={'dependency-inversion-principle-dip-'}>
            <h3>Dependency Inversion Principle (DIP)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              High-level modules should not depend on low-level modules; both should depend on abstractions. This
              decouples software modules.
            </p>
          </Grid>
          <Grid item xs={6} id={'other-principles-code'} />
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
          <Grid item xs={6} id={'kiss-keep-it-simple-stupid--code'} />
          <Grid item xs={12} id={'kiss-keep-it-simple-stupid-'}>
            <h3>KISS (Keep It Simple, Stupid)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>Systems work best when kept simple. Avoid unnecessary complexity.</p>
          </Grid>
          <Grid item xs={6} id={'yagni-you-aren-t-gonna-need-it--code'} />
          <Grid item xs={12} id={'yagni-you-aren-t-gonna-need-it-'}>
            <h3>YAGNI (You Aren&#039;t Gonna Need It)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>Avoid adding functionality until it&#039;s necessary. Prevents overengineering.</p>
          </Grid>
          <Grid item xs={6} id={'law-of-demeter-principle-of-least-knowledge--code'} />
          <Grid item xs={12} id={'law-of-demeter-principle-of-least-knowledge-'}>
            <h3>Law of Demeter (Principle of Least Knowledge)</h3>
          </Grid>

          <Grid item xs={6}>
            <p>
              An object should only communicate with its immediate neighbors. This leads to a more decoupled system.
            </p>
          </Grid>
          <Grid item xs={6} id={'separation-of-concerns-code'} />
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
};

export default ByLanguage;
