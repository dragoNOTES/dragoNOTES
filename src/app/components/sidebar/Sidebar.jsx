import React from 'react';

import { Flex } from '@chakra-ui/react';
import UserProfile from './UserProfile';

export default function Sidebar() {
  return (
    <Flex 
    w="400px" 
    bg="gray.700">
      <UserProfile/>
    </Flex>
  );
}
