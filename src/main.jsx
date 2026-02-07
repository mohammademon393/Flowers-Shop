import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


// Create a router instance with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
