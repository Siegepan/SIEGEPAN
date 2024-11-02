import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import TimeLine from "./pages/Timeline";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
