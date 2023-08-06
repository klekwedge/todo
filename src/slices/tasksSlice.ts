/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TasksState from './tasksSlice.types';


const initialState: TasksState = {
    tasks: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createNewTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        toggleTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
    },
    extraReducers: (builder) => {

    },
});

const { actions, reducer } = tasksSlice;

export const { createNewTask } = actions;

export default reducer;