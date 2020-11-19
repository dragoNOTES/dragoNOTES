import React from 'react';

import { Flex, Box, useDisclosure } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';

import ResourceHeader from './ResourceHeader';
import ResourceBody from './ResourceBody';

export default function Resource({ resource }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      direction="column"
      w="100%"
      p={3}
      bg="gray.900"
      rounded="md"
      boxShadow="lg"
    >
      <ResourceHeader {...{ resource, onToggle, isOpen }} />
      <Collapse in={isOpen}>
        <ResourceBody my={6} {...{ resource }} />
      </Collapse>
    </Box>
  );
}
