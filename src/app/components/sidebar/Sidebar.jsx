import React from 'react';
import UserProfile from './UserProfile';
import PinnedList from './PinnedList';
import FilterInputBar from './FilterInputBar';

import { Flex } from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Flex
      w="400px"
      bg="gray.700"
      direction="column"
      align="center"
      spacing={5}
      boxShadow="lg"
    >
      <UserProfile />
      <FilterInputBar />
      <PinnedList />
    </Flex>
  );
}
