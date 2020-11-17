import React from 'react';

import { Flex } from '@chakra-ui/react';

import Toolbar from './toolbar/Toolbar';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

export default function App() {
  return (
    <Flex h="100vh" direction="column">
      <Toolbar />
      <Flex h="100%">
        <Sidebar />
        <Main />
      </Flex>
    </Flex>
  );
}
