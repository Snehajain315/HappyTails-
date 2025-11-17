import About from "../Pages/about";
import ForgotPassword from "../Pages/Auth/forgot-password";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/reset-password";
import SignUp from "../Pages/Auth/SignUp";
import Cart from "../Pages/cart";
import Categories from "../Pages/categories";
import Contact from "../Pages/contact";
import Home from "../Pages/home";
import Pets from "../Pages/pets";
import CategoryProducts from "../Pages/products";
import WishList from "../Pages/wishList";

export const publicRoutes = [
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "signUp",
    path: "/signUp",
    element: <SignUp />,
  },
  {
    name: "Forgot-Password",
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    name: "Reset-Password",
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
];

export const privateRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Categories",
    path: "/categories",
    element: <Categories />,
  },
  {
    name: "Category-Products",
    path: "/categories/:slug",
    element: <CategoryProducts/>
  },
  {
    name: "Pets",
    path: "/pets",
    element: <Pets />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Cart",
    path: "/cart",
    element: <Cart />,
  },
  {
    name: "Wishlist",
    path: "/wishList",
    element: <WishList />,
  },
];
