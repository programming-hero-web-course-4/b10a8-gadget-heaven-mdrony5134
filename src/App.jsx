import "./App.css";
import { CartProvider } from "./components/Context/CartContext";
import Layout from "./Layouts/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CartProvider>
        <Layout />
        <ToastContainer/>
      </CartProvider>
    </>
  );
}

export default App;
