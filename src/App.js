import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Register from "./pages/Register";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
