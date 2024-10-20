import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "./layout/LayoutPublic";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails.jsx";
import NotFound from "./pages/NotFound"; // Agrega un componente de error si aún no existe
import Cart from "./pages/Cart.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
      {
        path: "productos/:id",
        element: <ProductDetails />,
      },
      {
        path: "/carrito",
        element: <Cart />,
      },
    ],
  },
]);
