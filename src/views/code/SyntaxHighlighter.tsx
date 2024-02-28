import React from 'react';
import OriginalSyntaxHighlighter from 'react-syntax-highlighter';
import {docco, darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Code} from 'react-content-loader';
import {useTheme} from '@mui/material';

interface SyntaxHighlighterProps {
  code?: string;
  language?: string;
  children?: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({code = '', children = '', language = ''}) => {
  const theme = useTheme();

  // Clone and modify the styles instead of modifying the original
  const customDocco = {
    ...docco,
    hljs: {
      ...docco.hljs,
      background: 'transparent',
      overflow: 'inherit',
      padding: '0',
      fontSize: '1rem',
      fontFamily: 'Roboto, Inter, sans-serif !important',
    },
  };
  const customDarcula = {
    ...darcula,
    hljs: {
      ...darcula.hljs,
      background: 'transparent',
      overflow: 'inherit',
      padding: '0',
      fontSize: '1rem',
      fontFamily: 'Roboto, Inter, sans-serif !important',
    },
  };

  const hasContent = language && (code || children);

  return (
    <div>
      {hasContent ? (
        <OriginalSyntaxHighlighter
          language={language}
          style={theme.palette.mode === 'light' ? customDocco : customDarcula}
        >
          {code || children || '// no code provided'}
        </OriginalSyntaxHighlighter>
      ) : (
        <>
          <Code />
          <div>Loading code...</div>
        </>
      )}
    </div>
  );
};

export default SyntaxHighlighter;
