import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./site/Home";
import Map from "./pages/Map";
import Kampaniyalar from "./pages/Kampaniyalar";
import Korporativ from "./pages/Korporativ";
import Liked from "./pages/Liked";
import Müqayisə from "./pages/Müqayisə";
import Cart from "./pages/Cart-page";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/magazalar",
          element: <Map />,
        },
        {
          path: "/kampaniyalar",
          element: <Kampaniyalar />,
        },
        {
          path: "/korporativ",
          element: <Korporativ />,
        },
        {
          path: "/liked",
          element: <Liked />,
        },
        {
          path: "/müqayisə",
          element: <Müqayisə />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
]);