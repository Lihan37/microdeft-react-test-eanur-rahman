import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register";
import Login from "./Login";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
  ]);