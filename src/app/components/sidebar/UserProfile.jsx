import React from 'react';

import { 
  Avatar, 
  Button, 
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem, 
  Spacer
} from "@chakra-ui/react"

export default function UserProfile() {
  return (
  <Flex 
    h='60px'  
    direction='row' 
    // align='center'
    alignItems="center"
    m={5}
    >
        <Avatar 
          name="UserPicture" 
          src="" 
          size="lg"
          boxShadow="lg"
          mx={5}
        />

      <Menu>
      <MenuButton 
        as={Button} 
        colorScheme="gray"
        boxShadow="lg"
        variant="ghost"
        
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