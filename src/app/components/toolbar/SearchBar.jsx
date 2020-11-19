import React from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar() {
  return (
    <InputGroup maxW="500px" flex={1} size="md">
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        children={<SearchIcon />}
      />
      <Input variant="filled" placeholder="Search Topic" />
    </InputGroup>
  );
}
