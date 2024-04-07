import {Box, Link, List, ListItem, ListItemText, SvgIconProps, Typography} from '@mui/material';

import {ContentType, ReferencesType} from '../../state';
import SyntaxHighlighter from './SyntaxHighlighter';
import LazyLoadImage from '../../components/images/LazyLoadImage';

type ReferencesProps = {
  references: ReferencesType;
};

function References({references}: ReferencesProps) {
  return (
    <Box>
      <Typography variant="h6">References</Typography>
      <List>
        {references.list.map((item) => (
          <ListItem style={{padding: '0'}}>
            <ListItemText>
              <Link href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </Link>
              {item.authorUrl ? ' by ' : item.author ? ' on ' : ''}
              {item.authorUrl ? (
                <Link href={item.authorUrl} target="_blank" rel="noreferrer">
                  {item.author}
                </Link>
              ) : (
                item.author
              )}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export type TypographySetProps = {
  content: (ContentType | ReferencesType)[];
  svgProps?: Omit<SvgIconProps, 'children' | 'mode'>;
};

export default function TypographySet({
  content,
  svgProps = {style: {width: '36rem', height: '18rem'}},
}: TypographySetProps) {
  return (
    <Box>
      {content.map((item) =>
        item.variant === 'code' ? (
          <SyntaxHighlighter key={item.content} language="javascript" code={item.content || 'Empty Code...'} />
        ) : item.variant === 'svg' ? (
          <Box display={'flex'} justifyContent={'center'}>
            <LazyLoadImage key={item.content} name={item.content as string} {...svgProps} />
          </Box>
        ) : item.variant === 'references' ? (
          <References references={item}></References>
        ) : (
          <Typography
            key={item.content}
            variant={item.variant || 'subtitle1'}
            dangerouslySetInnerHTML={{__html: item.content || 'Undefined row...'}}
            style={{padding: '.5rem 0'}}
          />
        ),
      )}
    </Box>
  );
}
