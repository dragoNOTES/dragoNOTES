import React from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';

import { filterTags } from '../../state/reducers/tagsReducer';

export default function SearchBar() {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.resources.lastQuery);
  const onChange = (e) => dispatch(filterTags(e.target.value));

  return (
    <InputGroup maxW="500px" flex={1} size="md">
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        children={<SearchIcon />}
      />
      <Input
        value={query}
        onChange={onChange}
        variant="filled"
        placeholder="Search Topic"
      />
    </InputGroup>
  );
}
