import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import ResourceList from './ResourceList';
import { myResources, otherResources } from '../../mock-data';

const Header = (props) => (
  <Flex alignItems="center" h="70px" bg="blue.800" p={4}>
    <Text fontSize="3xl">{props.children}</Text>
  </Flex>
);

export default function Main() {
  return (
    <Flex h="100%" flex="1" direction="column">
      <Header>React, Redux</Header>
      <Flex flex="1" direction="column" overflowY="scroll">
        <ResourceList title="My Resources" resources={myResources} />
        <ResourceList title="Others" resources={otherResources} />
      </Flex>
    </Flex>
  );
}
