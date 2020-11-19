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

export default function UserProfile() {
  return (
    <Flex h="60px" direction="row" alignItems="center" m={5}>
      <Avatar name="UserPicture" src="" size="md" boxShadow="lg" mx={4} />
      <Menu>
        <MenuButton as={Button} colorScheme="gray" variant="ghost">
          Username
        </MenuButton>
        <MenuList>
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
