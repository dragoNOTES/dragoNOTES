import React from 'react';

import { IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function FavoriteButton({ isFavorite, ...props }) {
  return (
    <IconButton
      color={isFavorite ? 'yellow.500' : 'gray.300'}
      icon={<StarIcon fontSize="xl" />}
      {...props}
    />
  );
}
