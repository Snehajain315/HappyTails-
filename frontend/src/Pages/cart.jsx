import React from "react";
import { Heart, ShoppingCart, Star, Package, Minus, Plus, Trash2, Eye } from "lucide-react";

export default function Cart({ cartData = [] }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header Section */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Review your selected items before checkout
          </p>
          {cartData.length > 0 && (
            <div className="mt-4 inline-flex items-center bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-600 font-medium">
                {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in cart
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {cartData.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some items to get started</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartData.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="relative md:w-48 h-48 md:h-auto overflow-hidden bg-gray-50">
                      <img
                        src={item.poster}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-all duration-300 hover:scale-110">
                          <Heart size={16} className="text-gray-600 hover:text-red-500 hover:fill-red-500" />
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-all duration-300 hover:scale-110">
                          <Eye size={16} className="text-gray-600 hover:text-blue-500" />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 ml-4">
                          <Trash2 size={20} />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2 font-medium">(4.0)</span>
                      </div>

                      {/* Weight/Size Info */}
                      {item.weight && (
                        <div className="flex items-center mb-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 w-fit">
                          <Package size={16} className="mr-2 text-blue-500" />
                          <span className="font-medium">{item.weight.value} {item.weight.unit}</span>
                        </div>
                      )}

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ₹{item.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ₹{Math.round(item.price * 1.2)}
                          </span>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-gray-50 rounded-xl p-1">
                          <button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                            <Minus size={16} className="text-gray-600" />
                          </button>
                          <span className="mx-4 font-semibold text-gray-800 min-w-[2rem] text-center">
                            {item.quantity || 1}
                          </span>
                          <button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                            <Plus size={16} className="text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartData.length} items)</span>
                    <span className="font-semibold">₹1,299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">₹234</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-800">Total</span>
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      ₹1,533
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Proceed to Checkout
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-50">
                    Continue Shopping
                  </button>
                </div>

                {/* Savings Badge */}
                <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
                  <div className="font-semibold">You're saving</div>
                  <div className="text-2xl font-bold">₹260</div>
                  <div className="text-sm opacity-90">on this order</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}