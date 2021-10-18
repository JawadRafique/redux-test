import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: 0, name: "todo1", status: "Active" },
        { id: 1, name: "todo2", status: "Inactive" },
        { id: 2, name: "todo3", status: "Active" },
    ],
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        deleteTask: (state, action) => {
            const removeIndex = state.tasks.findIndex(
                (item) => item.id === action.payload
            );
            state.tasks.splice(removeIndex, 1);
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
