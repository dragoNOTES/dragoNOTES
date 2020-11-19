import React from 'react';

import { Box, useDisclosure } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';
import { useDispatch } from 'react-redux';

import ResourceHeader from './ResourceHeader';
import ResourceBody from './ResourceBody';
import { fetchNotesByResourceID } from '../../../state/reducers/notesReducer';

export default function Resource({ resource }) {
  const { isOpen, onToggle } = useDisclosure();

  const dispatch = useDispatch();

  const _onToggle = () => {
    // fetch all the notes for a given resource when the resource is dropped down
    if (!isOpen) dispatch(fetchNotesByResourceID(resource._id));
    onToggle();
  };

  return (
    <Box
      direction="column"
      w="100%"
      p={3}
      bg="gray.900"
      rounded="md"
      boxShadow="lg"
    >
      <ResourceHeader {...{ resource, onToggle: _onToggle, isOpen }} />
      <Collapse in={isOpen}>
        <ResourceBody my={6} {...{ resource }} />
      </Collapse>
    </Box>
  );
}
