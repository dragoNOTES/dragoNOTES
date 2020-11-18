import React from 'react';
import SearchBar from './SearchBar';
import AddResourceButton from './AddResourceButton';

import { Flex, Text, Heading } from '@chakra-ui/react';

export default function Toolbar() {
  return (
    <Flex h="60px" align="center" bg="gray.500" >
      <Flex w="400px" >
        <Text fontSize="3xl"> 🐉 </Text>
        <Heading as="h2" size="xl"> DragoNotes </Heading>
      </Flex>
      <Flex >
        <SearchBar/>
        <AddResourceButton/>
      </Flex>
    </Flex>
  );
}
