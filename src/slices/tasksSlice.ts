/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TasksState from './tasksSlice.types';

const initialState: TasksState = {
    tasks: [],
    currentTask: null
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        createNewTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        toggleTask: (state, action) => {
            state.tasks = [...state.tasks.map((task) => (task.id === action.payload ? { ...task, complete: !task.complete } : { ...task }))];
        },
        removeTask: (state, action) => {
            state.tasks = [...state.tasks.filter((task) => task.id !== action.payload)];
        },
        chooseTask: (state, action) => {
            state.currentTask = state.tasks.find(task => task.id === action.payload) || null
        },
    },
});

const { actions, reducer } = tasksSlice;

export const { setTasks, createNewTask, toggleTask, removeTask, chooseTask } = actions;

export default reducer;