import React,{useState, useEffect} from "react";
import axios from 'axios';

export default function Pets(){

   useEffect(()=>{
    const fetchPetData=async()=>{
      const res= await axios.get("")
      console.log(res.data)
    }
    fetchPetData();
   },[])

    return(
        <div>
            <h1>Pets page</h1>
        </div>
    )
}