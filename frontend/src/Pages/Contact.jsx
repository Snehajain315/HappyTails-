import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Heart,
  PawPrint
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <PawPrint className="animate-bounce" size={40} />
            <Heart className="animate-bounce text-pink-300" size={40} style={{ animationDelay: '0.2s' }} />
            <PawPrint className="animate-bounce" size={40} style={{ animationDelay: '0.4s' }} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold font-['Pacifico'] mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We'd love to hear from you! Reach out to us for any questions about pet adoption, supplies, or just to share your pet stories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Pacifico']">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto mb-4"></div>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition duration-300 text-gray-700">
                  <option value="">Select Topic</option>
                  <option value="adoption">Pet Adoption</option>
                  <option value="supplies">Pet Supplies</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition duration-300 text-gray-700 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              
              <button
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-500 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            {/* Beautiful Pet Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1611003228941-98852ba62227?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Adorable puppy" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  "Every pet deserves a loving home"
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Pacifico']">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">sj030105@gmail.com</p>
                    <p className="text-gray-600">support@happytails.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Pet Paradise Lane</p>
                    <p className="text-gray-600">San Francisco, CA 94102</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Clock className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Pet Care</h3>
              <p className="mb-3 opacity-90">
                For urgent pet health matters, contact our 24/7 emergency hotline:
              </p>
              <p className="text-2xl font-bold">+1 (555) EMERGENCY</p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-['Pacifico']">
              Why Contact Happy Tails?
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-emerald-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Pet Adoption</h4>
              <p className="text-gray-600">Find your perfect furry companion through our adoption services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PawPrint className="text-emerald-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Pet Care Support</h4>
              <p className="text-gray-600">Get expert advice on pet care, training, and health</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Send className="text-emerald-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Quick Response</h4>
              <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}