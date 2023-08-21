import React from 'react';

import OriginalSyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {Code} from 'react-content-loader';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
}

const SyntaxHighlighter = ({code, language = ''}: SyntaxHighlighterProps) => {
  return (
    <div>
      {language.length > 0 && code.length > 0 ? (
        <OriginalSyntaxHighlighter language={language} style={docco}>
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
