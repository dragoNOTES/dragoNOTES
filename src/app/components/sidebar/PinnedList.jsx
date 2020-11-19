import React from 'react';

import { Box, StackDivider, VStack, Text, List, ListItem, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function PinnedList() {
  return (
    <Box w="100%" px={10}>
      <VStack
        divider={<StackDivider borderColor="gray" />}
        spacing={5}
        align="stretch"
        w="100%"
      >
        <Box w="100%" p={10} bg="gray.900" rounded="md" boxShadow="lg">
          <Text fontWeight="700" align="center">Pinned Topic</Text>
          <List spacing={2} direction="row">
            <ListItem > 
              <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              React
            </ListItem>
            <ListItem>
              <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              Redux
            </ListItem>
            <ListItem>
              <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              TypeScript
            </ListItem>
          </List>
        </Box>

        <Box w="100%" p={10} bg="gray.900" rounded="md" boxShadow="lg">
          <Text fontWeight="700" align="center">Pinned Resources</Text>
          <List spacing={2} direction="row">
         <ListItem> 
            <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              React - Learn This Stuff
          </ListItem>
          <ListItem>
            <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
            Redux - Learn This Stuff
            </ListItem>
          </List>
        </Box>

        <Box w="100%" p={10} bg="gray.900" rounded="md" boxShadow="lg">
        <Text fontWeight="700" align="center">Pinned Notes</Text>
        <List spacing={2} direction="row">
         <ListItem> 
            <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              React is amazing for Javascript engineers!
          </ListItem>
          <ListItem>
            <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              Redux is really cool to learn but react hooks are easier.
            </ListItem>
          <ListItem>
            <IconButton as={StarIcon} color="yellow.400" size="xxs"/>
              Chakra is a sick tool!!!
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
}
