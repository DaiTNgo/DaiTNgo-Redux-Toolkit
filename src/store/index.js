import { createSlice, configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';

// Store
const store = configureStore({
	reducer: {
		todosReducer$$$: todosReducer,
	},
});

export default store;
