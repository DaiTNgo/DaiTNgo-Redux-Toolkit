import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		allTodo: [
			{
				id: 1,
				title: 'Viec 1',
				completed: false,
			},
			{
				id: 2,
				title: 'Viec 2',
				completed: false,
			},
			{
				id: 3,
				title: 'Viec 3',
				completed: false,
			},
		],
	},
	reducers: {},
});

// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todosSelector = (state) => state.todosReducer$$$.allTodo;

export default todosReducer;
