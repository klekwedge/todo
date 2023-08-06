import React, { useState } from 'react';
import {
  Select,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';

import 'react-datepicker/dist/react-datepicker.css';
import './NewTaskForm.scss';
import { useAppDispatch } from '../../hooks/redux-hook';
import { createNewTask } from '../../slices/tasksSlice';

interface NewTaskFormProps {
  updateTaskBuff: (
    id: string,
    taskName: string,
    complete: boolean,
    category: string,
    description: string,
    deadline: string | null,
    creationDate: string[],
  ) => void;
}

function NewTaskForm({ updateTaskBuff }: NewTaskFormProps) {
  const dispatch = useAppDispatch();

  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [optionCategory, setOptionCategory] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenDatePicker, onOpen: onOpenDatePicker, onClose: onCloseDatePicker } = useDisclosure();

  const [startDate, setStartDate] = useState<Date>();

  const handleChangeDatePicker = (e: Date) => {
    onCloseDatePicker();
    setStartDate(e);
  };

  function createTask() {
    dispatch(
      createNewTask({
        id: Math.random().toString(36).substring(2, 9),
        taskName: taskNameInput,
        complete: false,
        category: optionCategory,
        description: taskDescription,
        deadline: startDate ? format(startDate, 'dd-MM-yyyy').replace(/-/g, '.') : null,
        creationDate: new Date().toLocaleString().split(', '),
      }),
    );

    setTaskNameInput('');
    setOptionCategory('');
    setTaskDescription('');
    onClose();
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
      <IconButton borderRadius="50%" width="40px" height="40px" onClick={onOpen} icon={<AddIcon />} aria-label="" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className="new-task" onSubmit={handleSubmit}>
              <Flex flexDirection="column" gap="5px">
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

              <Flex flexDirection="column" gap="5px">
                <h3>Description of your task</h3>
                <Input
                  type="text"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Enter a description of your task"
                />
              </Flex>

              {/* <label className="new-task__label">
                  What do you need to do?
                </label> */}

              <Flex gap="10px">
                <Select
                  placeholder="Select category"
                  onChange={(e) => setOptionCategory(e.target.value)}
                  value={optionCategory}
                >
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                  <option value="other">Other</option>
                </Select>

                <Button className="example-custom-input btn-select" onClick={onOpenDatePicker}>
                  {startDate ? format(startDate, 'dd-MM-yyyy') : 'No deadline'}
                </Button>

                <Modal isOpen={isOpenDatePicker} onClose={onCloseDatePicker}>
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
                </Modal>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewTaskForm;
