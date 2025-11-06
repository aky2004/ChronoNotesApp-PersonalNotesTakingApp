// AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear();
        },
    },
});

export const { addUser, logout,setToken } = AuthSlice.actions;
export default AuthSlice.reducer;
