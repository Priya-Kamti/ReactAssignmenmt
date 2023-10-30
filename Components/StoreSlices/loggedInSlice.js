

import { createSlice } from "@reduxjs/toolkit";

const loggedInSlice = createSlice({
  name: "LoggedIn",
  initialState: {
    user:{loggedIn:false, name:'Priy'}
  },
  reducers: {
    loggedInUser: (state, action) => {
            state.user.loggedIn=action.payload.loggedIn;
            state.user.name = action.payload.name;
            console.log(action.payload)
    },
  },
});

export const { loggedInUser } = loggedInSlice.actions;

export default loggedInSlice.reducer;