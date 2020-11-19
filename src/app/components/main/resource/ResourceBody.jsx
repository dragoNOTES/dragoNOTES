import React, { useState } from 'react';

import { Box, VStack, Button, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

import Note from '../note/Note';
import NoteEditor from '../note/NoteEditor';

const AddNoteButton = ({ onClick }) => (
  <Button {...{ onClick }} leftIcon={<AddIcon />} variant="outline" isFullWidth>
    Add Note
  </Button>
);

export default function ResourceBody({ resource, ...props }) {
  const notes = useSelector(
    (state) => state.notes.notesByResource[resource._id] ?? []
  );

  const [isComposingNote, setIsComposingNote] = useState(false);
  const onAddNote = () => {
    setIsComposingNote(true);
  };

  return (
    <Box {...props} ml={10} maxW="100%">
      <VStack spacing={5}>
        {isComposingNote ? (
          <NoteEditor
            onClose={() => setIsComposingNote(false)}
            resourceID={resource._id}
          />
        ) : (
          <AddNoteButton onClick={onAddNote} />
        )}
        {notes.length ? (
          notes.map((note) => <Note key={note._id} {...{ note }} />)
        ) : (
          <Text>☹️ No Notes</Text>
        )}
      </VStack>
    </Box>
  );
}
