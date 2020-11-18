import React from 'react';

import { 
  Avatar, 
  Button, 
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem, 
} from "@chakra-ui/react"

export default function UserProfile() {
  return (
  <Flex h='60px' direction='row' align='center'>
    <Flex >
      <Avatar 
        name="UserPicture" 
        src="https://bit.ly/dan-abramov" 
        size="lg"
        />
    </Flex>

    <Menu>
    <MenuButton as={Button} colorScheme="red">
      Username
    </MenuButton>
      <MenuList>
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
);
}