import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    todos: [
        { id: 0 , title: "todo1", completed: false},
        { id: 2 , title: "todo2", completed: false},
        { id: 3 , title: "todo3", completed: false}
    ],
    catFacts : ""
} 

export const getCatFactsAsync = createAsyncThunk("todos/getCatFactsAsync", async () => {
    const response = await axios.get('https://catfact.ninja/fact')
    return response.data.fact
})

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.todos.push(newTodo)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCatFactsAsync.fulfilled, (state,action) => {
            state.catFacts = action.payload
        })
    }
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;