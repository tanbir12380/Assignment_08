import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root.jsx";
import Home from "./Home.jsx";
import AllApp from "./AllApp.jsx";
import Install from "./Install.jsx";
import AppDetails from "./AppDetails.jsx";
import NoAppFound from "./NoAppFound.jsx";
import NothingFound from "./NothingFound.jsx";

const AllAppData = fetch("data.json").then((res) => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "AllApp",
        element: <AllApp></AllApp>,
      },
      {
        path: "install",
        element: <Install></Install>,
      },
      {
        path: "AllApp/:id",
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
        element: <AppDetails></AppDetails>,
      },
      {
        path: "*",
        element: <NothingFound></NothingFound>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
