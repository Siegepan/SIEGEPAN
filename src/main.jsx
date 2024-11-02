import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import Programacao from "./pages/Programacao";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/programacao",
    element: <Programacao />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
