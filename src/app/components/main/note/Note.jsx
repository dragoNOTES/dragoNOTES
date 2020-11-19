import React from 'react';

import { Flex, Divider } from '@chakra-ui/react';

import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

export default function Note({ note }) {
  return (
    <Flex
      w="100%"
      direction="column"
      p={5}
      borderWidth={2}
      borderColor="gray.700"
      rounded="md"
      boxShadow="lg"
    >
      <NoteHeader {...{ note }} />
      <Divider my={5} />
      <NoteBody content={note.content} />
    </Flex>
  );
}
