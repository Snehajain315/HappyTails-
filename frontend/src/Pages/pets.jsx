import React, { useState, useEffect } from "react";
import axios from "axios";
import { Package } from "lucide-react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchPetDataThunk } from "../features/pet/petThunk";


export default function Pets() {
  
  const dispatch = useDispatch();
  const pets = useSelector((state)=> state.pet.pets)
  console.log(pets)

  useEffect(() => {
    dispatch(fetchPetDataThunk());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 font-['Pacifico']">
          Pets
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">
          Discover amazing products for your beloved pets
        </p>
      </div>
      {pets.length > 0 ? (
        <div>
          
        </div>
      ) : (
        <div className="col-span-full text-center py-16">
          <div className="max-w-md mx-auto">
            <Package size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500">
              We couldn't find any products in the Pets category at the moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
