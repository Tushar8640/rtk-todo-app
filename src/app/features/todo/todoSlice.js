import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: [],
  selectedCategory: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addRemoveCategoryId: (state, action) => {
      if (state.categoryId.includes(action.payload)) {
        const filterItem = state.categoryId.filter((i) => i !== action.payload);
        state.categoryId = filterItem;
      } else {
        state.categoryId.push(action.payload);
      }
    },
    addRemoveCategory: (state, action) => {
      if (!state.categoryId.includes(action.payload.id)) {
        const filterItem = state.selectedCategory.filter(
          (i) => i.id !== action.payload.id
        );
        state.selectedCategory = filterItem;
      } else {
        state.selectedCategory.push(action.payload);
      }
    },
  },
});

export const { addRemoveCategory, addRemoveCategoryId } = todoSlice.actions;
export default todoSlice.reducer;
