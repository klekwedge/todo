import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Select, Input, ActionIcon, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { BsPlusCircle } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createNewTask } from '../../slices/tasksSlice';
import './NewTaskForm.scss';

function NewTaskForm() {
  const { collections } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const categoryData = collections.map((collection) => ({
    value: collection.name,
    label: `${collection.icon || ''} ${collection.name}`,
  }));

  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskCollection, setTaskCollection] = useState<string | null>('all');
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [priority, setPriority] = useState<string | null>('none');

  const [opened, { open, close }] = useDisclosure(false);

  function createTask() {
    const currentCollection = collections.find((collection) => collection.name === taskCollection);

    dispatch(
      createNewTask({
        id: uuidv4(),
        taskName: taskNameInput,
        complete: false,
        collection: taskCollection,
        color: currentCollection?.color || '',
        description: taskDescription,
        deadline,
        creationDate: new Date().toLocaleString().split(', '),
        priority,
      }),
    );

    setTaskNameInput('');
    setTaskCollection('');
    setTaskDescription('');
    setDeadline(null);
    setDeadline(null);
    close();
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createTask();
  };

  // const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
  //   if (e.key === 'Enter') {
  //     createTask();
  //   }
  // };

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
            />
          </Input.Wrapper>

          <Input.Wrapper w="100%" id="task-description" label="Task description">
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
              onChange={(value) => setTaskCollection(value)}
              value={taskCollection}
              data={[{ value: 'all', label: 'All' }, ...categoryData]}
            />
          </Input.Wrapper>
          <Input.Wrapper w="100%" label="Task deadline">
            <DatePickerInput placeholder="Choose deadline" value={deadline} onChange={setDeadline} w="100%" />
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
          </Input.Wrapper>
          <Button type="submit" size="sm" maw="100px">
            Add
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default NewTaskForm;
