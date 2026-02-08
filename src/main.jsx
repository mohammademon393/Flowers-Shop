import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './MainLAyout/Root';
import Home from './Pages/Home/Home';
import Flowers from './Pages/Flowers/Flowers';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';


// Create a router instance with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allFlowers",
        Component: Flowers,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/contact",
        Component: Contact,
      }
    ]
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
