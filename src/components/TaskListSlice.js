/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchTodoData = createAsyncThunk("api/fetchTodoData", async () => {
  try {
    const response = await fetch(
      "https://663993941ae792804bec281e.mockapi.io/books/book"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data please try again");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const TaskListSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      };
      fetch("https://663993941ae792804bec281e.mockapi.io/books/book", reqObj)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err));
    },
    DeleteTask: (state, action) => {
      const reqObj = {
        method: "DELETE",
      };
      fetch(
        `https://663993941ae792804bec281e.mockapi.io/books/book/${action.payload.id}`,
        reqObj
      )
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err, "Error"));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = [];
        state.error = null;
      })
      .addCase(fetchTodoData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchTodoData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export const { addTask, DeleteTask } = TaskListSlice.actions;

export default TaskListSlice.reducer;
