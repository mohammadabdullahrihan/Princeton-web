import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import NightLightContext from "./Contexts/NightLightContext.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <div className="scroll-smooth">
    <StrictMode>
      <AuthProvider>
        <NightLightContext>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
        </NightLightContext>
      </AuthProvider>
    </StrictMode>
  </div>
);
