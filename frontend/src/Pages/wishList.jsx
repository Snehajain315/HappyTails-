import React from "react";
import { Star, Package, Heart, Eye, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { showToast } from "../Components/toaster";

export default function WishList() {
  const wishListData = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Header Section */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            My Wishlist
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your carefully curated collection of favorite items
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {wishListData.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500">
              Start adding items you love to see them here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishListData.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Product Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <img
                    src={item.poster}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Wishlist Heart */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110">
                      <Heart
                        size={20}
                        className="text-red-500 fill-red-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 hover:scale-105">
                        <ShoppingCart size={16} />
                        <span
                          onClick={() => {
                            showToast({
                              message: "Added in Cart",
                              status: "success",
                            });
                            dispatch(addToCart(item));
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Weight/Size Info */}
                  {item.weight && (
                    <div className="flex items-center mb-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                      <Package size={16} className="mr-2 text-purple-500" />
                      <span className="font-medium">
                        {item.weight.value} {item.weight.unit}
                      </span>
                    </div>
                  )}

                  {/* Price Section */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ₹{item.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{Math.round(item.price * 1.2)}
                      </span>
                    </div>
                    {/* <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {Math.round(((item.price * 1.2 - item.price) / (item.price * 1.2)) * 100)}% OFF
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
