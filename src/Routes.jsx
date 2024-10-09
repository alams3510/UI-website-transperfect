import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import RequestQuote from "./pages/RequestQuote";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/request" element={<RequestQuote />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
