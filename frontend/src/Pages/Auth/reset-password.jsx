import React from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

export default function ResetPassword(){

    const {token}= useParams();
    const {loading} = useSelector((state)=>state.auth)
    console.log("token:", token)
    
    return(
        <div>
            Reset Password Page
        </div>
    )
}