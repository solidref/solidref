import Typography from '@mui/material/Typography';

import {ContentType} from '../../state';
import SyntaxHighlighter from '../code/SyntaxHighlighter';

export type TypographySetProps = {
  content: ContentType[];
};

export default function TypographySet({content}: TypographySetProps) {
  return (
    <>
      {content.map((item) =>
        item.variant !== 'code' ? (
          <Typography
            key={item.content}
            variant={item.variant || 'subtitle1'}
            dangerouslySetInnerHTML={{__html: item.content || 'Undefined row...'}}
          />
        ) : (
          <SyntaxHighlighter language="javascript" code={item.content || 'Empty Code...'} />
        ),
      )}
    </>
  );
}
