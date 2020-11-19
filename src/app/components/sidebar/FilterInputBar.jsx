import React from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function FilterInputBar() {
  return (
    <InputGroup w="80%" m={5} size="md">
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        children={<SearchIcon />}
      />
      <Input variant="filled" placeholder="Search" />
    </InputGroup>
  );
}
