import React, { useState } from "react";
import { 
  Cat, 
  Dog, 
  Heart, 
  Star, 
  ShoppingBag, 
  Users, 
  Award, 
  Truck,
  Shield,
  Clock,
  ArrowRight,
  PawPrint
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  let navigate= useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=300&fit=crop",
      rating: 4.8,
      category: "Food"
    },
    {
      id: 2,
      name: "Interactive Cat Toy",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=300&h=300&fit=crop",
      rating: 4.9,
      category: "Toys"
    },
    {
      id: 3,
      name: "Cozy Pet Bed",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
      rating: 4.7,
      category: "Furniture"
    },
    {
      id: 4,
      name: "Pet Health Supplements",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=300&fit=crop",
      rating: 4.6,
      category: "Health"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Happy Tails helped me find the perfect companion. My golden retriever Max has brought so much joy to our family!",
      rating: 5,
      location: "New York"
    },
    {
      name: "Mike Chen",
      text: "The quality of products is outstanding. My cat Luna loves everything we've ordered from Happy Tails.",
      rating: 5,
      location: "California"
    },
    {
      name: "Emily Davis",
      text: "Excellent customer service and fast delivery. They truly care about pets and their owners.",
      rating: 5,
      location: "Texas"
    }
  ];

  const stats = [
    { icon: <Users className="text-emerald-600" size={32} />, number: "50K+", label: "Happy Families" },
    { icon: <Heart className="text-emerald-600" size={32} />, number: "25K+", label: "Pets Adopted" },
    { icon: <Star className="text-emerald-600" size={32} />, number: "4.9/5", label: "Customer Rating" },
    { icon: <Award className="text-emerald-600" size={32} />, number: "5+", label: "Years Experience" }
  ];

  const services = [
    {
      icon: <Truck className="text-emerald-600" size={40} />,
      title: "Free Delivery",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <Shield className="text-emerald-600" size={40} />,
      title: "Health Guarantee",
      description: "30-day health guarantee for all pets"
    },
    {
      icon: <Clock className="text-emerald-600" size={40} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Cat className="animate-bounce" size={48} />
              <Dog className="animate-bounce" size={48} style={{ animationDelay: '0.2s' }} />
              <PawPrint className="animate-bounce" size={48} style={{ animationDelay: '0.4s' }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-['Pacifico'] mb-6">
              Happy Tails
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              "Pets are more than just animals; they're family. They bring joy, unconditional love, and companionship to our lives."
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              "From wagging tails to gentle purrs, pets make every house feel like home."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
              onClick={()=>navigate('/Categories/pets')}>
                Start Your Adoption Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition duration-300 transform hover:scale-105"
              onClick={()=>navigate('/categories/pets-food')}>
                Shop Pet Supplies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 font-['Pacifico']">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Handpicked essentials for your beloved pets</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Heart className="text-white opacity-70 hover:text-red-500 hover:opacity-100 cursor-pointer transition duration-300" size={20} />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-500 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-500 transition duration-300 inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 font-['Pacifico']">
              Why Choose Happy Tails?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-emerald-50 transition duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 font-['Pacifico']">
              Happy Customers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="font-bold text-gray-800 text-lg">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-gray-600">
              {testimonials[currentTestimonial].location}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentTestimonial ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4 font-['Pacifico']">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy families who found their furry friends through Happy Tails
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            onClick={()=>navigate('/Categories/pets')}>
              Browse Pets
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition duration-300 transform hover:scale-105"
            onClick={()=>navigate('/Contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}