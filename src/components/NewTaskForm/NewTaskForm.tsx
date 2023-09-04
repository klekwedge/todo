import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Flex, Modal, Textarea, Select, Input, ActionIcon, Title, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { BsPlusCircle } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/useRedux';
import { createNewTask } from '../../slices/tasksSlice';
import './NewTaskForm.scss';

function NewTaskForm() {
  const dispatch = useAppDispatch();

  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [optionCategory, setOptionCategory] = useState<string | null>(null);
  const [deadline, setDeadline] = useState<Date | null>(null);

  const [opened, { open, close }] = useDisclosure(false);

  function createTask() {
    dispatch(
      createNewTask({
        id: Math.random().toString(36).substring(2, 9),
        taskName: taskNameInput,
        complete: false,
        category: optionCategory,
        description: taskDescription,
        deadline,
        creationDate: new Date().toLocaleString().split(', '),
      }),
    );

    setTaskNameInput('');
    setOptionCategory('');
    setTaskDescription('');
    setDeadline(null);
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
      <Modal opened={opened} onClose={close} centered title="Create New Task">
        <form className="new-task" onSubmit={handleSubmit}>
          <Input.Wrapper w="100%" id="task-name" withAsterisk label="Task name">
            <Input
              id="task-name"
              value={taskNameInput}
              required
              minLength={3}
              data-autofocus
              placeholder="Enter the name of your task"
              onChange={(e) => setTaskNameInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </Input.Wrapper>

          <Input.Wrapper w="100%" id="task-description" label="Task description">
            <Input
              id="task-description"
              value={taskDescription}
              placeholder="Enter the description of your task"
              onChange={(e) => setTaskDescription(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </Input.Wrapper>

          <Input.Wrapper w="100%" label="Task category">
            <Select
              placeholder="Select category"
              onChange={(value) => {
                setOptionCategory(value);
              }}
              value={optionCategory}
              data={[
                { value: 'personal', label: 'Personal' },
                { value: 'work', label: 'Work' },
                { value: 'study', label: 'Study' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </Input.Wrapper>
          <Input.Wrapper w="100%" label="Task deadline">
            <DatePickerInput placeholder="Choose deadline" value={deadline} onChange={setDeadline} w="100%" />
          </Input.Wrapper>

          <Button type="submit" size='sm' maw='100px'>
            Add
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default NewTaskForm;
