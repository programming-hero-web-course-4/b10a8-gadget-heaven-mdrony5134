import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/HomePage/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SingleProductDetails from "../components/SingleProductDetails/SingleProductDetails";

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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default Router;
