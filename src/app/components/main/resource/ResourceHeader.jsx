import React from 'react';

import {
  Flex,
  IconButton,
  ButtonGroup,
  VStack,
  Text,
  Link,
  Spacer,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import TagList from './TagList';
import FavoriteButton from '../../shared/FavoriteButton';

const DropdownButton = ({ isOpen }) => (
  <IconButton
    icon={
      isOpen ? (
        <ChevronUpIcon fontSize="2xl" />
      ) : (
        <ChevronDownIcon fontSize="2xl" />
      )
    }
  />
);

export default function ResourceHeader({ resource, onToggle, isOpen }) {
  const onFavorite = (e) => {
    e.stopPropagation();
    console.log(`favoriting ${resource.title}`);
  };

  return (
    <Flex alignItems="center" onClick={onToggle}>
      <ButtonGroup isAttached variant="ghost">
        <DropdownButton isOpen={isOpen} />
        <FavoriteButton isFavorite={true} onClick={onFavorite} />
      </ButtonGroup>

      <VStack ml={3} spacing={0} align="flex-start">
        <Text fontWeight="500" fontSize="lg">
          {resource.title}
        </Text>
        <Link href={resource.url} target="_blank" color="gray.500">
          {resource.url}
        </Link>
      </VStack>
      <Spacer />
      <TagList tags={[{ name: resource.tag_name }]} />
    </Flex>
  );
}
