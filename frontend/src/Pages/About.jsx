import React from "react";
import { Heart, PawPrint } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <PawPrint size={32} />
            <Heart className="text-pink-200" size={32} />
            <PawPrint size={32} />
          </div>
          <h1 className="text-5xl font-bold font-['Pacifico'] mb-4">About Us</h1>
          <p className="text-xl opacity-90">Welcome to Happy Tails</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-['Pacifico']">Our Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Happy Tails was born from a simple love for animals and the belief that every pet deserves a loving home. 
              What started as a small dream has grown into a community dedicated to bringing joy to families through pet adoption.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We've helped thousands of furry friends find their forever homes, and each success story fills our hearts with happiness. 
              Our mission is to make the world a little brighter, one tail wag at a time.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="text-center mb-16">
          <img 
            src="https://png.pngtree.com/png-clipart/20231102/original/pngtree-group-of-dogs-animals-photo-png-image_13487871.png" 
            alt="Happy pets" 
            className="rounded-2xl shadow-lg mx-auto w-full max-w-3xl h-80 object-cover"
          />
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-['Pacifico']">What We Do</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Happy Tails, we connect loving pets with loving families. We carefully match each pet with the perfect family, 
              ensuring both pets and families are ready for this wonderful journey together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking for a playful puppy, a gentle senior dog, a cuddly kitten, or a wise old cat, 
              we're here to help you find your perfect companion.
            </p>
          </div>
        </div>

        {/* Simple Quote */}
        <div className="text-center bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-12">
          <div className="flex justify-center mb-4">
            <Heart className="text-emerald-600" size={40} />
          </div>
          <p className="text-2xl font-medium text-gray-800 italic mb-4">
            "Every pet has a story, and we're here to help write the happiest ending."
          </p>
          <p className="text-gray-600">- The Happy Tails Team</p>
        </div>
      </div>
    </div>
  );
}