import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Star, Package, Weight, ListCollapse } from "lucide-react";

export default function CategoryProducts({setCartData, setWishListData}) {
  const { slug } = useParams(); // Get category slug from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://happytails-wkk8.onrender.com/api/product/",{
          withCredentials: true
        });
        const filtered = res.data.filter((item) => item.category === slug);
        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching category products", err);
      }
    }
    fetchProducts();
  }, [slug]);

  // Format category name for display
  const formatCategoryName = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 font-['Pacifico']">
            {formatCategoryName(slug)}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Discover amazing products for your beloved pets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                {/* Product Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.poster}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  
                  {/* Wishlist Heart */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition duration-300">
                      {/* <Heart 
                        size={20} 
                        className="text-gray-600 hover:text-red-500 hover:fill-red-500 cursor-pointer transition duration-300"
                      /> */}
                    </div>
                  </div>

                  {/* Overlay with Add to Cart Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-0 p-4 w-full">
                      <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-2 w-full rounded-md font-medium transition duration-300 hover:from-emerald-600 hover:to-teal-500 flex items-center justify-center space-x-2">
                        <ListCollapse size={18} />
                        <span>View details</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.name}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">(4.0)</span>
                  </div>

                  {/* Weight/Size Info */}
                  {item.weight && (
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <Package size={16} className="mr-1" />
                      <span>{item.weight.value} {item.weight.unit}</span>
                    </div>
                  )}

                  {/* Price and Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-emerald-600">
                        ₹{item.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        ₹{Math.round(item.price * 1.2)}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition duration-300"
                      onClick={()=>{
                        console.log(item);
                        setWishListData((prev)=>[...prev,item])
                        alert('Add to wishlist')
                      }}>
                        <Heart size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200 transition duration-300" 
                      
                      onClick={()=>{
                        console.log(item)
                        setCartData((prev) => [...prev,item])
                        alert('Add to Cart')}
                        }>
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <Package size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500">
                  We couldn't find any products in the "{formatCategoryName(slug)}" category at the moment.
                </p>
                {/* <button className="mt-6 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-2 rounded-md font-medium transition duration-300 hover:from-emerald-600 hover:to-teal-500">
                  Browse All Categories
                </button> */}
              </div>
            </div>
          )}
        </div>

        {/* Load More Button (when products exist) */}
        {/* {products.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-600 hover:text-white transition duration-300">
              Load More Products
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}