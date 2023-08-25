import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout";

import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd"; // Import the Select component from Ant Design


import { useNavigate } from "react-router-dom";
const { Option } = Select;

const UploadFood = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  
  
  

  

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
     
     
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        console.log("create -product running");
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Upload Waste Food"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            
          </div>
          <div className="col-md-9">
            <h1>Upload food</h1>
            <div className="m-1 w-75">
             
             
              
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

             
              
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ADD WASTE FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UploadFood;