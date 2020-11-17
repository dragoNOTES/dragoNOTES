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

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Box bg="blue.50" w="100%" p={10} color="white">
          <Container>
            <Center>
              <VStack>
                <Button colorScheme="teal" variant="solid">
                  GitHub OAuth
                </Button>
                <Input placeholder="Username" />
                <Input placeholder="Passord" />
                <Button colorScheme="teal" variant="solid">
                  sign in
                </Button>
              </VStack>
            </Center>
          </Container>
        </Box>
      </Container>
    );
  }
}
