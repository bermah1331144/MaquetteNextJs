"use client";

// permet d'aller chercher mes composants
import React, { useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

export default function PageFormulaire() {
    const [blog , setBlog] = React.useState([]);

    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    useEffect(() => {
        if(blogId){
            fetch(`http://localhost:3000/publications/${blogId}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.log(error));
        }
    }, [blogId]); // pas sur de cette partie
        
    return <>
        <Header />
        <NavBar />
         <BlogCard blog={blog} />{/*------- ATTENTION PAS fonctionnelle------ */}
        <Footer />
    </>
}