/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ICollection, ITask } from '../types/types';

interface TasksState {
    tasks: ITask[];
    archiveTasks: ITask[];
    currentTask: ITask | null;
    collections: ICollection[]
}

const initialState: TasksState = {
    tasks: [],
    archiveTasks: [],
    currentTask: null,
    collections: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setCollections: (state, action) => {
            state.collections = action.payload;
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
        createNewCollection: (state, action) => {
            state.collections.push(action.payload);
        },
        setDescription: (state, action) => {
            state.tasks = [...state.tasks.map((task) => (task.id === action.payload.id ? { ...task, description: action.payload.value } : { ...task }))];
            const findTask = state.tasks.find(task => task.id === action.payload.id) || null
            state.currentTask = findTask ? { ...findTask, description: action.payload.value } : null;
        },
        updateCollection: (state, action) => {
            state.collections = [...state.collections.map((collection) => (collection.id === action.payload.id ? { ...action.payload.value, id: action.payload.id } : { ...collection }))];
            state.tasks = [...state.tasks.map((task) => (task.collectionId === action.payload.id ? { ...task, collectionColor: action.payload.value.color } : { ...task }))];
        },
        deleteCollection: (state, action) => {
            state.collections = [...state.collections.filter((collection) => collection.id !== action.payload)];
            state.tasks = [...state.tasks.filter((task) => (task.collectionId !== action.payload))];
        },
        addArchiveTask: (state, action) => {
            state.tasks = [...state.tasks.filter((task) => (task.id !== action.payload.id))];
            state.archiveTasks.push(action.payload);
        },
        deleteArchiveTask: (state, action) => {
            state.archiveTasks = [...state.archiveTasks.filter((task) => (task.id !== action.payload))];
        }
    },
});

const { actions, reducer } = tasksSlice;

export const { setTasks, setCollections, updateCollection, deleteCollection, setDescription, createNewTask, toggleTask, removeTask, chooseTask, createNewCollection, addArchiveTask, deleteArchiveTask } = actions;

export default reducer;