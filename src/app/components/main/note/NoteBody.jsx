import React, { memo } from 'react';

import { Container, Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const renderers = {
  code({ language, value }) {
    return (
      <SyntaxHighlighter style={okaidia} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
};

// ! Bug: ReactMarkdown isn't rendering properly, and the code preview will only render
// !      on a hot reload from Snowpack...
export default memo(function NoteBody({ content }) {
  return (
    <Box p={6} maxW="100%">
      <ReactMarkdown
        renderers={renderers}
        plugins={[[gfm, { singleTilde: false }]]}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
});
