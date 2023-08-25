import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "./../components/Layout";

import "../styles/HomePage.css";

const HomePage = () => {
  
  return (
    <Layout title={"Welcome  "}>
     
      <div className="container-fluid row mt-3 home-page">
        
          
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        
        
      
    </Layout>
  );
};

export default HomePage;