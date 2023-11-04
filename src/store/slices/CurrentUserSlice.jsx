import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const CurrentUserSlice = createSlice({
  name: "current-user",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      const userdata = action.payload;
      state.data = userdata;
    },
  },
});
export const { setCurrentUser } = CurrentUserSlice.actions;
export const CurrentUserReducer = CurrentUserSlice.reducer;
