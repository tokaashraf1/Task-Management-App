import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};
 export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await response.json();
  return data.map((task) => ({
    id: task.id,
    title: task.title,
    description: "",
    status: task.completed ? "Completed" : "To Do",
  }));
});
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.loading = true;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default taskSlice.reducer