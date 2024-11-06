import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SingleProductDetails from "../components/SingleProductDetails/SingleProductDetails";
import Statics from "../components/Statics/Statics";
import Dashboard from "../Dashboard/Dashboard";
import SingUp from "../pages/SingUp/SingUp";
import About from "../components/About/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:product_id",
        element: <SingleProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statics",
        element: <Statics />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default Router;
