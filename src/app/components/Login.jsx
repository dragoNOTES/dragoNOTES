import React, { Component } from 'react';
import { Box } from '@chakra-ui/react';
import {
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
        <Box bg="tomato" w="100%" p={10} color="white">
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
