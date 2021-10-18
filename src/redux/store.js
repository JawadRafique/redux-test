import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./testSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});
