import React from 'react';

import { Flex, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function AddResourceButton() {
  return (
    <Flex>
        <IconButton 
          variant="outline"
          aria-label="Add Resources"
          icon={<AddIcon/>}
        />
    </Flex>
    );
}
