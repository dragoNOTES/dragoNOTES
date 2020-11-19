import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Flex } from '@chakra-ui/react';

import Toolbar from './toolbar/Toolbar';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

import { fetchAllTags } from '../state/reducers/tagsReducer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTags());
  }, []);

  return (
    <Flex h="100vh" maxH="100vh" direction="column">
      <Toolbar />
      <Flex flex="1" maxH="100%">
        <Sidebar />
        <Main />
      </Flex>
    </Flex>
  );
}
