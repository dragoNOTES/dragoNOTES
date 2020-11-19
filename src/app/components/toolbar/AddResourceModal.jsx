import React, { useRef, useState, useCallback } from 'react';

import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { createResource } from '../../state/reducers/resourcesReducer';

export default function AddResourceModal({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const dispatch = useDispatch();
  const onSave = useCallback(() => {
    dispatch(
      createResource({
        title,
        link,
      })
    );
    onClose();
  }, [dispatch, title, link, onClose]);

  const initialRef = useRef();

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a resource</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              ref={initialRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="A sick tool"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>URL</FormLabel>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://thisis.sick/sosick"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onSave} colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
