import {createAsyncThunk} from "@reduxjs/toolkit"
import { login, signup } from "../../services/authServices"

export const loginThunk = createAsyncThunk(
    "user/loginThunk",
    async(body, {rejectWithValue})=>{
        try{
        const response = await login(body);
        console.log(response);
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

