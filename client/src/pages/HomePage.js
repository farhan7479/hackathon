import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout";

import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Fetch products from the API
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    getAllProducts();
  }, []);

  return (
    <Layout title={"All Products - Best offers"}>
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          {/* You can add filter options here */}
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All problem</h1>
          <div className="d-flex flex-wrap">
            {products.map((p) => (
              <div className="card m-2" key={p._id}>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                  </div>
                  <p className="card-text">{p.description.substring(0, 60)}...</p>
                  <div className="card-name-price">
                    <button className="btn btn-info ms-1">More Details</button>
                    {/* You can link this button to a separate product details page */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Add pagination buttons or other UI elements here */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
