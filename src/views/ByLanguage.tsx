import React from "react";
import Page from "../components/Page.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ByLanguage: React.FC = () => {
  return (
    <Page>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>SOLID Principles</h2>
          </Grid>
          <Grid item xs={6}>
            <h3>Single Responsibility Principle (SRP)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Open/Closed Principle (OCP)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Liskov Substitution Principle (LSP)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Interface Segregation Principle (ISP)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Dependency Inversion Principle (DIP)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <h2>Other Principles</h2>
          </Grid>
          <Grid item xs={6}>
            <h3>DRY (Don&#039;t Repeat Yourself)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>KISS (Keep It Simple, Stupid)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>YAGNI (You Aren&#039;t Gonna Need It)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Law of Demeter (Principle of Least Knowledge)</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <h3>Separation of Concerns</h3>
            <p>test</p>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default ByLanguage;
