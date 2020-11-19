import React, { useState } from 'react';

import { Flex, Button, ButtonGroup, Textarea } from '@chakra-ui/react';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';

import { createNote } from '../../../state/reducers/notesReducer';

// TODO: configure the slate editor properly. definitely bring this out into it's own file
// // Import the Slate editor factory.
// import { createEditor } from 'slate';

// // Import the Slate components and React plugin.
// import { Slate, Editable, withReact } from 'slate-react';

// const Editor = () => {
//   const editor = useMemo(() => withReact(createEditor()), []);

//   const [value, setValue] = useState([]);

//   return (
//     <Slate
//       editor={editor}
//       value={value}
//       onChange={(newValue) => setValue(newValue)}
//     >
//       <Editable placeholder="Type your note here..." />
//     </Slate>
//   );
// };

export default function NoteEditor({ onClose, resourceID }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');

  const onSave = () => {
    dispatch(createNote({ content: body, resourceID }));
    onClose();
  };

  return (
    <Flex
      w="100%"
      direction="column"
      p={5}
      borderWidth={2}
      borderColor="gray.700"
      rounded="md"
      boxShadow="lg"
    >
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="My new beautiful note..."
      />
      {/* <Editor /> */}
      <Flex mt={5} justifyContent="flex-end">
        <ButtonGroup variant="solid" isAttached>
          <Button onClick={onClose} leftIcon={<CloseIcon />} colorScheme="gray">
            Cancel
          </Button>
          <Button onClick={onSave} leftIcon={<CheckIcon />} colorScheme="green">
            Save
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
