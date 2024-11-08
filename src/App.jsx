import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { CartProvider } from "./components/Context/CartContext";
import Layout from "./Layouts/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HelmetProvider>
        <CartProvider>
          <Layout />
          <ToastContainer />
        </CartProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
