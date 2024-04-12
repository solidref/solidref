import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {Box, Grid, IconButton, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useRef} from 'react';
import * as SlickSlider from 'react-slick';

import {AsArticleProps} from './AsArticle';
import Slider from '../../../generic/Slider';
import {defaultSlickSliderProps} from '../../../generic/SliderDefaults';
import SyntaxHighlighter from '../../../generic/SyntaxHighlighter';
import TypographySet from '../../../generic/TypographySet';

const WrapperBox = styled(Box)(({theme}) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: (theme.palette as any)?.alternate?.dark,
  borderRadius: '1rem',
  borderBottomRightRadius: '0',
  borderTopLeftRadius: '0',
}));

export const TitleBox = styled(Box)(({theme}) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: (theme.palette as any)?.primary?.dark,
  borderRadius: '1rem',
  borderBottomRightRadius: '0',
  borderTopLeftRadius: '0',
  margin: '0 0 1rem 0',
  padding: '0 1.5rem',
}));

export const NavigationBox = styled(Box)(() => ({
  margin: '-2.5rem 0 0',
}));

export const ContentBox = styled(Box)(() => ({
  maxHeight: '40rem',
  padding: '1rem',
  width: 'calc(100% - 2rem)',
}));

export type AsGridProps = AsArticleProps & {
  columns: number;
};

export default function AsGrid({columns = 4, language = 'js', patternOrPrinciple}: AsGridProps) {
  let sliderRef = useRef<SlickSlider.default>(null);

  const {description = [], examples = [], title} = patternOrPrinciple;

  // TODO: should this go into TypographySet as default size for SVG?
  const svgProps = {
    style: {width: '100%', height: 'calc(100% / 2)', margin: '0 0.5rem'},
  };

  const frames = [
    ...examples.map((example) => (
      <div key={example.title}>
        <Typography variant="subtitle1"># {(example.title ?? 'Example').toLowerCase()}</Typography>
        <SyntaxHighlighter code={example.code || '// missing code'} language={language} />
      </div>
    )),
    ...(description.length
      ? [
          <div>
            <TypographySet content={description} svgProps={svgProps} />
          </div>,
        ]
      : []),
  ];

  return (
    <Grid item xs={columns} key={patternOrPrinciple.title}>
      <WrapperBox display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
        <TitleBox alignSelf={'flex-end'}>
          <Typography variant="subtitle1" style={{fontSize: '1rem'}}>
            {title.length > 25 ? (
              <abbr title={title} style={{textDecoration: 'none'}}>
                {title.substring(0, 25)}...
              </abbr>
            ) : (
              title
            )}
          </Typography>
        </TitleBox>
        <NavigationBox>
          {[
            ...examples.map((example, index) => (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <IconButton key={JSON.stringify(example)} onClick={() => (sliderRef as any).slickGoTo(index)}>
                <CodeIcon style={{fontSize: '1rem'}} />
              </IconButton>
            )),
            ...(description.length
              ? [
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <IconButton key={1} onClick={() => (sliderRef as any).slickGoTo(examples.length)}>
                    <LibraryBooksIcon style={{fontSize: '1rem'}} />
                  </IconButton>,
                ]
              : []),
          ]}
        </NavigationBox>
        <ContentBox>
          {frames.length > 1 ? (
            <Slider
              sliderProps={{
                ...defaultSlickSliderProps,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref: (slider: any) => {
                  sliderRef = slider;
                },
              }}
              cardProps={{style: {background: 'transparent', height: '40rem', overflow: 'auto'}, elevation: 0}}
              frames={frames}
            />
          ) : (
            <div style={{background: 'transparent', height: '40rem', overflow: 'auto'}}>
              <Typography variant="subtitle1"># {(examples[0].title ?? 'Example').toLowerCase()}</Typography>
              <SyntaxHighlighter code={examples[0].code || '// missing code'} language={language} />
            </div>
          )}
        </ContentBox>
      </WrapperBox>
    </Grid>
  );
}
