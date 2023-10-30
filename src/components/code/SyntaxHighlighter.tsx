import React from 'react';

import OriginalSyntaxHighlighter from 'react-syntax-highlighter';
import {docco, darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {Code} from 'react-content-loader';
import {styled, useTheme} from '@mui/material';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
}

const SyntaxHighlighter = ({code, language = ''}: SyntaxHighlighterProps) => {
  const theme = useTheme();
  docco.hljs.background = 'transparent';
  docco.hljs.overflow = 'inherit';
  docco.hljs.padding = '0';
  darcula.hljs.background = 'transparent';
  darcula.hljs.overflow = 'inherit';
  darcula.hljs.padding = '0';
  return (
    <div>
      {language.length > 0 && code.length > 0 ? (
        <OriginalSyntaxHighlighter language={language} style={theme.palette.mode === 'light' ? docco : darcula}>
          {code}
        </OriginalSyntaxHighlighter>
      ) : (
        <>
          <Code />
          <div>loading code...</div>
        </>
      )}
    </div>
  );
};

export default SyntaxHighlighter;