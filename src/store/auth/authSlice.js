import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
  notification: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
      localStorage.setItem("isLogged", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = {};
      localStorage.removeItem("user");
      localStorage.removeItem("isLogged");
    },
    refreashUser: (state, action)=>{
      state.user = action.payload
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },

    changeNotification: (state)=>{
      // state.notification = state.notification ? false : true
      state.notification = !state.notification 
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, refreashUser, changeNotification } = authSlice.actions;

export default authSlice.reducer;
