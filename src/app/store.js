import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/TaskListSlice";

export const store = configureStore({
  reducer: {
    TodoList: todoReducer,
  },
});
