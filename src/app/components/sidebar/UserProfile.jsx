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
  <Flex 
    h='60px' 
    w='100%' 
    direction='row' 
    align='center'
    >
      <Flex >
        <Avatar 
          name="UserPicture" 
          src="" 
          size="lg"
        />
      </Flex>

      <Menu>
      <MenuButton 
        as={Button} 
        colorScheme="blue"
      >
        Username
      </MenuButton>
        <MenuList>
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
  </Flex>
);
}