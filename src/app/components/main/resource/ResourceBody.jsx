import React, { useState } from 'react';

import { Flex, Box, VStack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import Note from '../note/Note';
import NoteEditor from '../note/NoteEditor';

// TODO: this is mock data
import { notes } from '../../../mock-data';

const AddNoteButton = ({ onClick }) => (
  <Button {...{ onClick }} leftIcon={<AddIcon />} variant="outline" isFullWidth>
    Add Note
  </Button>
);

export default function ResourceBody({ resource, ...props }) {
  const [isComposingNote, setIsComposingNote] = useState(false);

  const onAddNote = () => {
    setIsComposingNote(true);
  };

  return (
    <Box {...props} ml={10} maxW="100%">
      <VStack spacing={5}>
        {isComposingNote ? (
          <NoteEditor onClose={() => setIsComposingNote(false)} />
        ) : (
          <AddNoteButton onClick={onAddNote} />
        )}
        {notes.map((note) => (
          <Note key={note._id} {...{ note }} />
        ))}
      </VStack>
    </Box>
  );
}
