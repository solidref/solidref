import React from 'react';
import {Language} from '../../state';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import {CodingPrincipleTitles} from '../../constants';
import ByCodingPrinciples from './ByCodingPrinciples';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

type CodingPrinciplesProps = {
  language: Language;
};

function ByPrinciplesOrPatterns({language}: CodingPrinciplesProps) {
  const [value, setValue] = React.useState(0);

  console.log('language', language);

  const values: Record<string, number> = {};
  let count = 0;
  Object.keys(language?.principles ?? {}).forEach((key) => (values[key] = count++));
  Object.keys(language?.patterns ?? {}).forEach((key) => (values[key] = count++));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {Object.keys(language?.principles ?? {}).map((key) => (
            <Tab
              key={`priciples-tab-${key}`}
              label={CodingPrincipleTitles[key] ?? CodingPrincipleTitles.unknownPrinciple}
              {...a11yProps(values[key])}
            />
          ))}
          {Object.keys(language?.patterns ?? {}).map((key) => (
            <Tab
              key={`patterns-tab-${key}`}
              label={CodingPrincipleTitles[key] ?? CodingPrincipleTitles.unknownPattern}
              {...a11yProps(values[key])}
            />
          ))}
        </Tabs>
      </Box>
      {Object.keys(language?.principles ?? {}).map((key) => (
        <CustomTabPanel key={`priciples-panel-${key}`} value={value} index={values[key]}>
          <ByCodingPrinciples code={language.code} principles={(language?.principles as any)[key]}></ByCodingPrinciples>
        </CustomTabPanel>
      ))}
      {Object.keys(language?.patterns ?? {}).map((key) => (
        <CustomTabPanel key={`patterns-panel-${key}`} value={value} index={values[key]}>
          {key}
        </CustomTabPanel>
      ))}
    </>
  );
}

export default ByPrinciplesOrPatterns;
