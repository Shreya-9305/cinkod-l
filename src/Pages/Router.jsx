import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "../components/home/home";

import About from "../components/About/About";
import Header from "../components/Header/Header";
import Community from "../components/Community/Community";
import Event from "../components/Event/Event";






const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        {/* <Route path="/home" element={<HomePage />}/> */}

        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Community/>}/>
        <Route path="/event" element={<Event/>}/>
      
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;