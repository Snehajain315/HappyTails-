import {createAsyncThunk} from "@reduxjs/toolkit"
import { forgotPassword, login, resetPassword, signup } from "../../services/authServices"

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
            console.log(response);
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

export const resetPasswordThunk = createAsyncThunk(
    "user/resetPasswordThunk",
    async(credentials, {rejectWithValue})=>{
        try{
            const response= await resetPassword(credentials);
            return response;
        }
        catch(err){
            return rejectWithValue(err.message || "something wrong!")
        }
    }
) 