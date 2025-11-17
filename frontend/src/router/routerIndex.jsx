import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet, Navigate} from "react-router-dom";
import LayoutWithNav from "../Components/LayoutWithNav";
import { privateRoutes, publicRoutes } from "../Components/routes";

 const PrivateRoute = () => {
  const token = localStorage.getItem("authToken");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const token = localStorage.getItem("authToken");
  return token ? <Navigate to="/" /> : <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutWithNav />,
        children: privateRoutes.map((route) => ({
          path: route.path,
          element: route.element,
        })),
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: publicRoutes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
