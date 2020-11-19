import React from 'react';

import { Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AddResourceModal from './AddResourceModal';

export default function AddResourceButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="Add Resources"
        icon={<AddIcon />}
      />
      <AddResourceModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
