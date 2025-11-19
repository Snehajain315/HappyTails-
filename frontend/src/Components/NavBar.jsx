import React, { useState, useEffect } from "react";
import { Cat, ShoppingCart, Heart, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      let token = localStorage.getItem("authToken");
      let storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        try {
          setIsLoggedIn(true);
          setUserData(JSON.parse(storedUser));
        } catch (err) {
          console.log("Failed to parse user Data");
          handleLogOut();
        }
      }
    };
    checkAuth();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo Section with Playful Design */}
          <div className="flex items-center space-x-3 transform hover:scale-105 transition duration-300">
            <Cat className="text-white animate-bounce" size={36} />
            <h3 className="text-3xl font-extrabold font-['Pacifico'] tracking-wide">
              Happy Tails
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 justify-between w-full ">
            <ul className="flex items-center space-x-6 ml-64">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li className="relative">
                <ShoppingCart
                  size={24}
                  className="text-white hover:text-emerald-200 transition duration-300 cursor-pointer"
                  onClick={() => navigate("/Cart")}
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </li>
              <li>
                <Heart
                  size={24}
                  className="text-white hover:text-red-300 transition duration-300 cursor-pointer"
                  onClick={() => navigate("/WishList")}
                />
              </li>
            </ul>

            {/* Conditional rendering for Login/Signup vs User Profile */}
            <div className="flex items-center space-x-3 ml-6">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signUp"
                    className="px-3 py-1 bg-white/10 hover:bg-white/30 border border-white rounded-full transition duration-300"
                  >
                    SignUp
                  </Link>
                </>
              ) : (
                <>
                  <span className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {userData?.profilePicture ? (
                      <img
                        src={`http://localhost:5173/${userData.profilePicture}`}
                        alt={userData.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserCircle size={34} className="text-gray-500" />
                    )}
                  </span>
                  <p className="relative top-6 right-15">{userData.name}</p>
                  <button
                    onClick={handleLogOut}
                    className="px-3 py-1 bg-red-500/80 hover:bg-red-600 rounded-full transition duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
