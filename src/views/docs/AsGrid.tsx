import CropSquareIcon from '@mui/icons-material/CropSquare';
import {Grid, GridProps, Button, SvgIconProps, ButtonProps} from '@mui/material';
import {ElementType, createElement, useState} from 'react';

import {AsArticleProps} from './AsArticle';
import AsGridItem from './item/AsGrid';

type ColumnsButtonProps = {
  length: number;
  button?: ElementType;
  buttonProps?: ButtonProps;
  icon?: ElementType;
  iconProps?: SvgIconProps;
};

function ColumnsButton({
  length,
  button = Button,
  icon = CropSquareIcon,
  buttonProps = {},
  iconProps = {},
}: ColumnsButtonProps) {
  return createElement(
    button,
    {
      variant: 'text',
      ...buttonProps,
    },
    <>{Array.from(Array(length)).map((_, index) => createElement(icon, {...iconProps, key: index}))}</>,
  );
}

export type AsGridProps = AsArticleProps &
  GridProps & {
    buttonBarProps?: GridProps;
  };

export default function AsGrid({buttonBarProps = {}, language, patternsOrPrinciples, type, ...rest}: AsGridProps) {
  const [columns, setColumns] = useState<number>(4);

  return (
    <Grid container spacing={2} {...rest}>
      <Grid item xs={12} display={'flex'} flexDirection={'row-reverse'} alignItems={'flex-end'} {...buttonBarProps}>
        <ColumnsButton
          length={3}
          iconProps={{style: {fontSize: '.6rem'}}}
          buttonProps={{onClick: () => setColumns(4), disabled: columns === 4}}
        />
        <ColumnsButton
          length={2}
          iconProps={{style: {fontSize: '.8rem'}}}
          buttonProps={{onClick: () => setColumns(6), disabled: columns === 6}}
        />
      </Grid>

      {patternsOrPrinciples.map((patternOrPrinciple) => (
        <AsGridItem
          columns={columns}
          key={patternOrPrinciple.title}
          language={language}
          patternOrPrinciple={patternOrPrinciple}
          type={type}
        />
      ))}
    </Grid>
  );
}
