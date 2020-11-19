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
import { PanSession } from 'framer-motion/types/gestures/PanSession';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  
  componentDidMount() {
    // this.loginFetch();
  }

  loginFetch() {
    const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:9000/login/github/callback`;
    fetch(url)
      .then((response) => response.json())
      .then((parsedJSON) => console.log(parsedJSON.results))
      .catch((error) => console.log('parsing failed', error));
  }

  render() {
    return (
      <Container>
        <Box bg="blue.50" w="100%" p={10} color="white">
          <Container>
            <Center>
              <VStack>
                <Button onClick= colorScheme="teal" variant="solid">
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
