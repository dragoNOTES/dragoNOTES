import React from 'react';

import { Box, StackDivider, VStack, Text } from "@chakra-ui/react"

export default function PinnedList() {
 return (
   <Box
   align="center"
   w="100%"
   px={10}
   >
    <VStack
      divider={<StackDivider borderColor="gray" />}
      spacing={5}
      align="stretch"
      w="100%"
    >
      <Box 
        w="100%"
        p={10}
        bg="gray.900"
        rounded="md"
        boxShadow="lg"
      >
        <Text>
          Pinned Topic
        </Text>
      </Box>
      <Box 
        w="100%"
        p={10}
        bg="gray.900"
        rounded="md"
        boxShadow="lg"
      >
        Pinned Resources
      </Box>
      <Box 
        w="100%"
        p={10}
        bg="gray.900"
        rounded="md"
        boxShadow="lg"
      >
        Pinned Notes
      </Box>
    </VStack>
  </Box>
  )
}
