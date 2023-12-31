import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/AuthStyle.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import UploadFood from "./pages/UploadFood";

import ForgotPasssword from "./pages/auth/ForgotPassword";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      
        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/uploadFood" element={<UploadFood />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;