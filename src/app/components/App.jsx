import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from '@chakra-ui/react';

import Login from './Login';
import Toolbar from './toolbar/Toolbar';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

import { fetchAllTags } from '../state/reducers/tagsReducer';
import { fetchUserData } from '../state/reducers/userReducer';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchAllTags());
  });

  return (
    <div>
      {isLoggedIn ? (
        <Flex h="100vh" maxH="100vh" direction="column">
          <Toolbar />
          <Flex flex="1" maxH="100%">
            <Sidebar />
            <Main />
          </Flex>
        </Flex>
      ) : (
        <Login />
      )}
    </div>
  );
}
