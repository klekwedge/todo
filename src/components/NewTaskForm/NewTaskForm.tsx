import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Flex, Modal, Textarea, Select, Button, Input, ActionIcon } from '@mantine/core';
import { BsPlusCircle } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/useRedux';
import { createNewTask } from '../../slices/tasksSlice';
import './NewTaskForm.scss';

function NewTaskForm() {
  const dispatch = useAppDispatch();

  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [optionCategory, setOptionCategory] = useState('');

  const [opened, { open, close }] = useDisclosure(false);

  const [startDate, setStartDate] = useState<Date>();

  // const handleChangeDatePicker = (e: Date) => {
  //   // onCloseDatePicker();
  //   setStartDate(e);
  // };

  function createTask() {
    dispatch(
      createNewTask({
        id: Math.random().toString(36).substring(2, 9),
        taskName: taskNameInput,
        complete: false,
        category: optionCategory,
        description: taskDescription,
        deadline:
          //  startDate ? format(startDate, 'dd-MM-yyyy').replace(/-/g, '.') :
          null,
        creationDate: new Date().toLocaleString().split(', '),
      }),
    );

    setTaskNameInput('');
    setOptionCategory('');
    setTaskDescription('');
    close();
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createTask();
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      createTask();
    }
  };

  return (
    <>
      <ActionIcon size="2.5rem" radius="50%" onClick={open}>
        <BsPlusCircle size="20px" />
      </ActionIcon>
      <Modal.Root opened={opened} onClose={close} centered title="Create New Task">
        <Modal.Overlay />
        <Modal.Content>21212121</Modal.Content>
        {/* <form className="new-task" onSubmit={handleSubmit}>
          <Flex direction="column" gap="5px">
            <h3>New task</h3>
            <Flex gap="10px">
              <Input
                type="text"
                value={taskNameInput}
                required
                minLength={3}
                autoFocus
                placeholder="Enter the name of your task"
                onChange={(e) => setTaskNameInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button type="submit" className="new-task__button">
                Add
              </button>
            </Flex>
          </Flex>
          <Flex direction="column" gap="5px">
            <h3>Description of your task</h3>
            <Textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter a description of your task"
              autosize
            />
          </Flex>
          <Flex gap="10px">
            <Select
              placeholder="Select category"
              // onChange={(e) => setOptionCategory(e.target.value)}
              value={optionCategory}
              data={[
                { value: 'personal', label: 'Personal' },
                { value: 'work', label: 'Work' },
                { value: 'study', label: 'Study' },
                { value: 'other', label: 'Other' },
              ]}
            />

            {/* <Button className="example-custom-input btn-select" onClick={onOpenDatePicker}>
              {startDate ? format(startDate, 'dd-MM-yyyy') : 'No deadline'}
            </Button> */}

        {/* <Modal isOpen={isOpenDatePicker} onClose={onCloseDatePicker}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Choose deadline:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="0px">
                      <Flex justifyContent="center" minHeight="280px">
                        <DatePicker selected={startDate} onChange={handleChangeDatePicker} inline />
                      </Flex>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal> */}
        {/* </Flex>
        </form> */}
      </Modal.Root>
    </>
  );
}

export default NewTaskForm;
