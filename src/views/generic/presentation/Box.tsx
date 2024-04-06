import {styled} from '@mui/material/styles';
import {Typography, Box, BoxProps} from '@mui/material';
import {ReactNode, isValidElement} from 'react';

export type PresentationBoxProps = {
  title: ReactNode;
  actions?: ReactNode;
  actionsProps?: BoxProps;
  content?: ReactNode;
  contentProps?: BoxProps;
  children?: ReactNode;
};

const PBox = styled(Box)(({theme}) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: (theme.palette as any)?.alternate?.dark,
  borderRadius: '1rem',
  borderBottomRightRadius: '0',
  borderTopLeftRadius: '0',
}));

export const PresentationBoxHeader = styled(Box)(({theme}) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: (theme.palette as any)?.primary?.dark,
  borderRadius: '1rem',
  borderBottomRightRadius: '0',
  borderTopLeftRadius: '0',
  margin: '0 0 1rem 0',
  padding: '0 1.5rem',
}));

export const PresentationBoxActions = styled(Box)(() => ({}));

export const PresentationBoxContent = styled(Box)(() => ({
  maxHeight: '40rem',
  padding: '1rem',
  width: 'calc(100% - 2rem)',
}));

export default function PresentationBox({
  title,
  actions,
  actionsProps = {},
  content,
  contentProps = {},
  children = <></>,
}: PresentationBoxProps) {
  return (
    <PBox display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
      {isValidElement(title) ? (
        title
      ) : typeof title === 'string' ? (
        <PresentationBoxHeader alignSelf={'flex-end'}>
          <Typography variant="subtitle1">
            {title.length > 25 ? (
              <abbr title={title} style={{textDecoration: 'none'}}>
                {title.substring(0, 25)}...
              </abbr>
            ) : (
              title
            )}
          </Typography>
        </PresentationBoxHeader>
      ) : (
        // hopefully this will never happen
        <></>
      )}
      {actions ? <PresentationBoxActions {...actionsProps}>{actions}</PresentationBoxActions> : <></>}
      {content ? <PresentationBoxContent {...contentProps}>{content}</PresentationBoxContent> : <></>}
      {children}
    </PBox>
  );
}
