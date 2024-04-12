import React, {useState} from 'react';
import Box, {BoxProps} from '@mui/material/Box';
import AsAccordionItem from './item/AsAccordion';
import {AsArticleProps} from './AsArticle';

type AsAccordionProps = AsArticleProps & BoxProps;

export default function AsAccordion({patternsOrPrinciples, type, language}: AsAccordionProps) {
  const [expanded, setExpanded] = useState<string[]>([patternsOrPrinciples[0].title]);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
  };

  return (
    <Box sx={{flexGrow: 1}}>
      {patternsOrPrinciples.map((patternOrPrinciple) => (
        <>
          <AsAccordionItem
            expanded={expanded}
            language={language}
            onChange={handleChange(patternOrPrinciple.title)}
            patternOrPrinciple={patternOrPrinciple}
            type={type}
          />
        </>
      ))}
    </Box>
  );
}
