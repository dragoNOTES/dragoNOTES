import React, { Component } from 'react';
import {
  Box,
  Center,
  Square,
  Circle,
  Container,
  Button,
  ButtonGroup,
  Stack,
  VStack,
  Input,
} from '@chakra-ui/react';
// import { PanSession } from 'framer-motion/types/gestures/PanSession';

export default function Login () {

  const handleLogin = () => {
    window.location.href = '/auth/login';
  }

  return (
    <Container>
      <Box bg="blue.50" w="100%" p={10} color="white">
        <Container>
          <Center>
            <VStack>
              <Button onClick={handleLogin} colorScheme="teal" variant="solid">
                GitHub OAuth
              </Button>
            </VStack>
          </Center>
        </Container>
      </Box>
    </Container>
  );
}