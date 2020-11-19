import React from 'react';

import { Container, Flex, Heading, VStack } from '@chakra-ui/react';
import Resource from './resource/Resource';

export default function ResourceList({ title, resources, ...props }) {
  return (
    <Container maxW="lg">
      <Flex {...props} direction="column" m={5}>
        <Heading size="md" color="gray.500" mb={2}>
          {title}
        </Heading>
        <VStack flex="1" spacing={5}>
          {resources.map((resource) => (
            <Resource key={resource._id} {...{ resource }} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
}
