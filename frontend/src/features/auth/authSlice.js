import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signupThunk } from "./authThunk";

const initialState = {
    users: [],
    user: null,
    role: null,
    token: null,
    loading: false,
    error: null,
    message: null
}

const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(loginThunk.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginThunk.fulfilled, (state, action)=>{
            console.log(action)
            state.loading = false;
            state.role = action.payload.user.role;
            state.role = action.payload.token;
            state.user= action.payload.user;
        })
        .addCase(loginThunk.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Login failed"
        })

        .addCase(signupThunk.pending, (state)=>{
            state.loading= true;
            state.error = null;
        })
        .addCase(signupThunk.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.loading= false;
            state.users.push(action.payload);
        })
        .addCase(signupThunk.rejected, (state, action)=>{
            state.loading = false;
            state.error= action.payload || "signup failed";
        })
    }
})

export default authSlice.reducer;