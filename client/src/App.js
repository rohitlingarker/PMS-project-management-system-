import {Routes, Route, useLocation} from "react-router-dom"
import Home from "./components/Home.js"
import React from 'react';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import { ProtectedRoute } from "./ProtectedRoute.js";
import Signin from "./components/Signin.js";

function App() {
  const location = useLocation();
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />

      {(location.pathname !== "/signin" && location.pathname !=="/signup" ) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home/>} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signin />} />
        
      </Routes>
    </div>
  );
}

export default App;
