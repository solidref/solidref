import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CenteredToolbar} from '../../components/Header';
import Page from '../../components/Page';
import Box from '@mui/material/Box';
import Code from '../generic/Code';
import {useParams} from 'react-router-dom';

export default function CodingPrinciplesProprietary() {
  const {principle = 'dry'} = useParams<{principle: string}>();

  const [expanded, setExpanded] = React.useState<string[]>([principle]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    console.log(newExpanded);
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
    console.log(expanded);
  };

  return (
    <>
      <CenteredToolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h2">
          Understanding <i>SOLID</i> Principles
          <br /> in Software Development
        </Typography>
        <Typography variant="h6"></Typography>
      </CenteredToolbar>
      <Page>
        <Box sx={{flexGrow: 1}}>
          <Typography variant="subtitle1" gutterBottom>
            The SOLID principles are a set of design principles in object-oriented programming that enable developers to
            create more maintainable, understandable, and flexible software. Here's a deeper dive into each of these
            principles.
          </Typography>
          <Accordion expanded={expanded.includes('dry')} onChange={handleChange('dry')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h5">DRY (Don't Repeat Yourself)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                DRY is a fundamental principle in software development that emphasizes the importance of avoiding
                duplication in code. The idea is to have a single, authoritative representation of every piece of
                knowledge and logic in the system.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                By following DRY, you reduce the likelihood of inconsistencies and bugs because changes only need to be
                made in one place. It also makes the codebase easier to maintain and understand.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Implement DRY by identifying patterns and repeated code blocks. Then refactor these into functions,
                classes, or modules that can be reused.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Suppose you have several functions that validate user input. Instead of repeating the validation logic
                in each function, create a single validateInput function and call it wherever validation is needed.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Adhering to DRY helps in building a cleaner, more efficient, and error-resistant codebase. It's about
                maximizing the impact of code changes while minimizing the effort.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('kiss')} onChange={handleChange('kiss')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h5">KISS (Keep It Simple, Stupid)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                KISS advocates for simplicity in design. It suggests that systems work best if they are kept simple
                rather than made complex. Therefore, simplicity should be a key goal in design, and unnecessary
                complexity should be avoided.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Simpler code is easier to understand, test, and maintain. It often leads to fewer bugs and improves
                collaboration as more team members can understand and contribute to the codebase.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                To keep things simple, always look for the most straightforward solution. Avoid over-engineering and
                adding unnecessary features or layers.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                When designing a function to calculate the area of a rectangle, stick to the basic formula (length *
                width). Resist the urge to add unrelated features, like logging or input validation, to the function.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                KISS is about the elegance and power of simplicity. In a world where complexity is often seen as
                sophistication, KISS reminds us that simple solutions are often the best.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('yagni')} onChange={handleChange('yagni')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h5">YAGNI (You Aren't Gonna Need It)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                YAGNI is a principle of extreme programming that states a programmer should not add functionality until
                deemed necessary. It's a caution against over-engineering.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Benefits
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Following YAGNI can save time and resources, and help keep the software product lean and focused. It
                avoids the burden of maintaining unused code.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Implementation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                When developing, always question the necessity of each feature. Add something only when it's immediately
                needed, not just because it might be needed in the future.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                If you're building a website and think, "I might need a user forum in the future," resist the urge to
                implement it now. Wait until it's clear that a forum is necessary.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Conclusion
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                YAGNI is a reminder to stay focused on the present requirements and avoid getting sidetracked by
                features and functionalities that might never be needed.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Page>
    </>
  );
}
