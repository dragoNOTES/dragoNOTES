import React from 'react';

import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function UserProfile() {
  const { avatarUrl, name } = useSelector((state) => state.user);

  return (
    <Flex h="60px" direction="row" alignItems="center" m={5}>
      <Avatar
        name="UserPicture"
        src={avatarUrl}
        size="md"
        boxShadow="lg"
        mx={5}
      />
      <Menu>
        <MenuButton as={Button} colorScheme="gray" variant="ghost">
          {name}
        </MenuButton>
        <MenuList>
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
