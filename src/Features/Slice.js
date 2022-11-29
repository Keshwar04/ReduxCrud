import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Data/DummyData";

export const slice = createSlice({
  name: "crud",
  initialState: UsersData,
  reducers: {
    addData: (state, action) => {
      state = state.push(action.payload);
    },
    updateData: (state, action) => {
      state = state.map((e) => {
        if (e.id === action.payload.id) {
          e.name = action.payload.name;
          e.age = action.payload.age;
        }
      });
    },
    deleteData: (state, action) => {
      state = state.filter((e) => e.id !== action.payload.id);
    }
  }
});

export const { addData, updateData, deleteData } = slice.actions;
export default slice.reducer;
