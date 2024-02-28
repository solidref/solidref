import {Box, Typography} from '@mui/material';

import {ContentType} from '../../state';
import SyntaxHighlighter from '../code/SyntaxHighlighter';

export type TypographySetProps = {
  content: ContentType[];
};

export default function TypographySet({content}: TypographySetProps) {
  return (
    <Box>
      {content.map((item) =>
        item.variant !== 'code' ? (
          <Typography
            key={item.content}
            variant={item.variant || 'subtitle1'}
            dangerouslySetInnerHTML={{__html: item.content || 'Undefined row...'}}
            style={{padding: '.5rem 0'}}
          />
        ) : (
          <SyntaxHighlighter language="javascript" code={item.content || 'Empty Code...'} />
        ),
      )}
    </Box>
  );
}
