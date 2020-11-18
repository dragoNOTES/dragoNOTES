import React from 'react';

import { Input } from '@chakra-ui/react';

export default function SearchBar() {
  return (
  <Input 
    variant="filled" 
    placeholder="Search Topic" 
    flex={1}
    maxW="500px"
  />);
}
