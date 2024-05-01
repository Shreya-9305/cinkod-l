import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "../components/home/home";
import Home from "../Pages/home/home";
import About from "../Pages/About/About";
import Community from "../Pages/Community/Community";
import Event from "../Pages/Event/Event";
import Blog from "../Pages/Blog/Blog";
import Chapter from "../components/chapters/chapter";
import CC from "../components/chapters-college/cc";
import BlogSpecf from "../components/blog-specf/BlogSpecf";






const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        {/* <Route path="/home" element={<HomePage />}/> */}

        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Community/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/chapter" element={<Chapter/>}/>
        <Route path="/chapter/college" element={<CC/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/blogs/specf" element={<BlogSpecf/>}/>
      
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;