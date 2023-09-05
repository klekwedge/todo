import { useDisclosure } from '@mantine/hooks';
import { BsEmojiSmile } from 'react-icons/bs';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';
import { Modal, Flex, Button, Group, Input, Popover, ActionIcon } from '@mantine/core';

function NewCollection() {
  const [opened, { open, close }] = useDisclosure(false);

  const [collectionIcon, setCollectionIcon] = useState(null);
  const [collectionName, setCollectionName] = useState('');
  const [collectionColor, setCollectionColor] = useState(null);

  function createCollection() {
    setCollectionName('');
    setCollectionColor(null);
    setCollectionIcon(null);
    close();
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createCollection();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title="Create New collection">
        <form
          onSubmit={handleSubmit}
          style={{ height: '300px'}}
        >
          <Flex gap="10px" align="center" mb='20px'>
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

          {/* <Input.Wrapper w="100%" id="task-description" label="Task description">
            <Input
              id="task-description"
              value={taskDescription}
              placeholder="Enter the description of your task"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper w="100%" label="Task category">
            <Select
              placeholder="Select category"
              onChange={(value) => setOptionCategory(value)}
              value={optionCategory}
              data={[
                { value: 'personal', label: 'Personal' },
                { value: 'work', label: 'Work' },
                { value: 'study', label: 'Study' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </Input.Wrapper>
          <Input.Wrapper w="100%" label="Task priority">
            <Select
              placeholder="Select priority"
              onChange={(value) => setPriority(value)}
              value={priority}
              data={[
                { value: 'none', label: 'None' },
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
              ]}
            />
          </Input.Wrapper> */}
          <Button type="submit" size="sm" maw="100px">
            Add
          </Button>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export default NewCollection;
