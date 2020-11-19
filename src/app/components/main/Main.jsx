import React, { useEffect, useMemo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import ResourceList from './ResourceList';
import { fetchResourcesByTagName } from '../../state/reducers/resourcesReducer';

const capitalize = (str) =>
  str.length ? str[0].toUpperCase() + str.slice(1) : '';

const Header = (props) => (
  <Flex alignItems="center" h="70px" bg="blue.800" p={4} boxShadow="sm">
    <Text fontSize="3xl">{props.children}</Text>
  </Flex>
);

export default function Main() {
  const dispatch = useDispatch();

  const queryResultTags = useSelector((state) => state.tags.filteredTags);

  const tagsTextDisplay = useMemo(
    () => queryResultTags.map((tag) => capitalize(tag.name)).join(', '),
    [queryResultTags]
  );

  useEffect(() => {
    dispatch(fetchResourcesByTagName(queryResultTags[0]?.name || ''));
  }, [queryResultTags, dispatch]);

  return (
    <Flex h="100%" flex="1" direction="column">
      <Header>{tagsTextDisplay}</Header>
      <Flex flex="1" direction="column" overflowY="scroll">
        <ResourceList title="My Resources" />
        <ResourceList title="Others" />
      </Flex>
    </Flex>
  );
}
