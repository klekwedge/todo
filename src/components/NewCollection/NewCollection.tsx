import { useDisclosure } from '@mantine/hooks';
import { v4 as uuidv4 } from 'uuid';
import { BsEmojiSmile, BsArrowRepeat } from 'react-icons/bs';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';
import { Modal, Flex, ColorInput, Button, Group, Input, Popover, ActionIcon } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createNewCollection } from '../../slices/tasksSlice';

interface NewCollectionProps {
  opened: boolean;
  close: () => void;
}

function NewCollection({ opened, close }: NewCollectionProps) {
  const dispatch = useAppDispatch();
  const { collections } = useAppSelector((state) => state.tasks);
  const [collectionIcon, setCollectionIcon] = useState<null | string>(null);
  const [collectionName, setCollectionName] = useState('');
  const [collectionColor, setCollectionColor] = useState<undefined | string>();

  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  function createCollection() {
    if (collectionName && !collections.find((item) => item.name === collectionName)) {
      dispatch(
        createNewCollection({
          icon: collectionIcon,
          name: collectionName,
          color: collectionColor,
          id: uuidv4(),
        }),
      );

      setCollectionIcon(null);
      setCollectionName('');
      setCollectionColor(undefined);

      close();
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createCollection();
  };

  return (
    <Modal opened={opened} onClose={close} centered title="Create New collection">
      <form onSubmit={handleSubmit} style={{ height: '300px' }}>
        <Input.Wrapper w="100%" label="Collection name">
          <Flex gap="10px" align="center" mb="20px">
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <ActionIcon bg="#25262B" variant="transparent">
                  {collectionIcon || <BsEmojiSmile />}
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown>
                <Picker
                  onEmojiSelect={(e) => setCollectionIcon(e.native)}
                  data={data}
                  style={{ height: '200px' }}
                  previewPosition="none"
                />
              </Popover.Dropdown>
            </Popover>
            <Input
              w="100%"
              id="collection-name"
              value={collectionName}
              required
              minLength={3}
              data-autofocus
              placeholder="Enter the name of your collection"
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </Flex>
        </Input.Wrapper>

        <ColorInput
          label="Collection color"
          value={collectionColor}
          onChange={setCollectionColor}
          mb="20px"
          rightSection={
            <ActionIcon onClick={() => setCollectionColor(randomColor())}>
              <BsArrowRepeat size="1rem" />
            </ActionIcon>
          }
        />

        <Button type="submit" size="sm" maw="100px">
          Add
        </Button>
      </form>
    </Modal>
  );
}

export default NewCollection;
