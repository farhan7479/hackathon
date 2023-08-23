import React from "react";
import Layout from "./../components/Layout";
import { Link } from "react-router-dom";

import "../styles/ContactStyle.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>New Delhi India-110025</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>+91 7479453902</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p><a href="mailto:shahid957farhan@gmail.com">shahid957farhan@gmail.com.com</a></p>
        </div>
      </div>
    </div>
    <p className="contact-message">
        Feel free to contact us if you have any questions or need assistance. Our team of professionals is ready to help you.
      </p>

  

    </Layout>
  );
};

export default Contact;