import React from 'react';

import { HStack, Tag } from '@chakra-ui/react';

export default function TagList({ tags }) {
  return (
    <HStack spacing={4}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          borderRadius="full"
          variant="solid"
          colorScheme="purple"
          size="md"
        >
          {tag}
        </Tag>
      ))}
    </HStack>
  );
}
