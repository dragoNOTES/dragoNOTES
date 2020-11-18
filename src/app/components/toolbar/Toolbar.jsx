import React from 'react';
import SearchBar from './SearchBar';
import AddResourceButton from './AddResourceButton';

import { Flex, Text, Spacer} from '@chakra-ui/react';

export default function Toolbar() {
  return (
    <Flex h="100px" alignItems="center" justifyContent="space-between" bg="gray.900" p={2}>
      
      <Flex >
        <Text fontSize="2xl" fontWeight="500" >🐉 DragoNotes </Text>
      </Flex>

        <SearchBar/>
        <AddResourceButton/>
    </Flex>
  );
}
