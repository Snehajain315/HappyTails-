import {createAsyncThunk} from "@reduxjs/toolkit"
import { forgotPassword, login, signup } from "../../services/authServices"

export const loginThunk = createAsyncThunk(
    "user/loginThunk",
    async(body, {rejectWithValue})=>{
        try{
        const response = await login(body);
        return response;
        }
        catch(err){
            return rejectWithValue(err.message || "Something wrong!")
        }
    }
)

export const signupThunk = createAsyncThunk(
    "user/signupThunk", 
    async(formData, {rejectWithValue})=>{
        try{
            const response = await signup(formData);
            return response;
        }
        catch(err){
            return rejectWithValue(err.message || "something wrong!")
        }
    }
)

export const forgotPasswordThunk = createAsyncThunk(
    "user/forgotPasswordThunk",
    async(email, {rejectWithValue})=>{
        try{
            const response = await forgotPassword(email);
            return response;
        }
        catch(err){
            return rejectWithValue(err.message || "something wrong!")
        }
    }
)
