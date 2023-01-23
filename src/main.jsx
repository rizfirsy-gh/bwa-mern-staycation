import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Categories from "./pages/Categories";
import Stories from "./pages/Stories";
import Agents from "./pages/Agents";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/agents",
    element: <Agents />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
