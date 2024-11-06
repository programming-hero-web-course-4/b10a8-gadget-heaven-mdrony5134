import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statics = () => {
  const [allProduct, setAllProduct] = useState([]);
  const loadProductData = async () => {
    const fetchProductData = await fetch("/Data/productData.json");
    const productData = await fetchProductData.json();
    setAllProduct(productData);
  };
  useEffect(() => {
    loadProductData();
  }, []);

  // map all product
  const data = allProduct.map((product) => ({
    name: product.product_title,
    price: product.price,
    rating: product.rating,
  }));

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Gadget Haven - statics</title>
      </Helmet>
      <h2 className="text-[25px] font-bold text-center text-[#9538E2] mb-8">Product Statics</h2>
      <ComposedChart
        width={1280}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "price", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={50} fill="#9538E2" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </div>
  );
};

export default Statics;
