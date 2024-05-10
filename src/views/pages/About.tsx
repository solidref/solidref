import {Box, Typography, useTheme} from '@mui/material';

import HomeHero from './home/Hero';

import Container from '../generic/Container';
import TypographySet from '../generic/TypographySet';
import {ContentType} from '../../state';

function About() {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any)?.alternate?.main;

  const content: ContentType[] = [
    {
      variant: 'subtitle1',
      content: 'Welcome,',
    },
    {
      variant: 'body1',
      content: `Hello and welcome to <a href="https://solidref.me">SOLID.ref</a>, a personal project born from my passion for software development and a desire to share the power of SOLID principles, design patterns, and clean code. As a developer, I've created this site to serve as a bridge between theoretical best practices and their application in everyday coding across various programming languages.`,
    },
    {
      variant: 'subtitle1',
      content: 'Our Purpose',
    },
    {
      variant: 'body1',
      content: `The core purpose of this website is to show that the principles of good software design are universal, transcending the syntactic differences of programming languages. Whether you're working in Java, Python, C#, or any other modern language, the concepts of SOLID principles, design patterns, and clean code can be applied effectively. This site aims to demonstrate how embracing these practices can lead to better software that is easier to understand, maintain, and scale.`,
    },
    {
      variant: 'subtitle1',
      content: 'Leveraging AI for Content Creation',
    },
    {
      variant: 'body1',
      content: `Much of the content you'll find on this site has been initially generated with the assistance of AI technologies, specifically ChatGPT. This approach allows us to cover a broad range of topics and provide detailed explanations efficiently. However, the nuanced nature of programming and software design means that human expertise is invaluable. We highly encourage developers to validate the content, offer corrections, and contribute examples from their own experiences and expertise in various programming languages. Your insights will help enhance the accuracy and applicability of the information we share.`,
    },
    {
      variant: 'subtitle1',
      content: `What you'll find here`,
    },
    {
      variant: 'body1',
      content: `Here at SOLID.ref, you'll find a variety of resources designed to help you understand and apply software engineering principles in real-world scenarios. The content ranges from in-depth articles and step-by-step guides to comparative studies that illustrate how these principles manifest across different programming environments. Each topic is treated with a practical approach, aimed at providing actionable insights you can apply to your projects.`,
    },
    {
      variant: 'subtitle1',
      content: `Insights and Discussions`,
    },
    {
      variant: 'body1',
      content: `One of my goals is to foster a deeper understanding of how seemingly abstract principles take shape in daily programming tasks. To this end, the website also explores common challenges and misconceptions about applying these rules, offering clear, concise explanations and solutions. I encourage readers to think critically about the way we build software and to see beyond the language-specific techniques to the underlying patterns that guide effective design.`,
    },
    {
      variant: 'subtitle1',
      content: `Invitation to Collaborate`,
    },
    {
      variant: 'body1',
      content: `I invite you to join me on this journey to better software design. Whether you are a novice eager to learn about the basics or a seasoned programmer looking to refine your mastery of software architecture, there is something here for you. Feel free to share your experiences, insights, and questions, as this site is meant to be a collaborative space for learning and growth.`,
    },
  ];

  return (
    <Box>
      <Box bgcolor={boxBgColor} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <HomeHero />
        </Container>
      </Box>
      <Container>
        <TypographySet content={content} />
        <Typography variant="subtitle1">Related Projects</Typography>
        <Typography variant="body1">
          In addition to SOLID.ref, I've also created a number of other projects that you might find interesting. These
          include:
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
