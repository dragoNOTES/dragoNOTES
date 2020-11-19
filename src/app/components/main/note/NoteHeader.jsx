import React from 'react';

import { Flex, Avatar, VStack, Text, Spacer } from '@chakra-ui/react';

import FavoriteButton from '../../shared/FavoriteButton';

export default function NoteHeader({ note }) {
  return (
    <Flex flex="1" alignItems="center">
      <Avatar />
      <VStack ml={4} spacing={0} align="flex-start">
        <Text fontWeight="400" fontSize="md">
          Jonathan
        </Text>
        <Text color="gray.500">
          Last updated {new Date(note.updatedAt).toLocaleDateString()}
        </Text>
      </VStack>
      <Spacer />
      <FavoriteButton variant="ghost" />
      <Text fontSize="sm" color="gray.300">
        67
      </Text>
    </Flex>
  );
}
