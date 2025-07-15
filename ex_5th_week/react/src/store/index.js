import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/listSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;