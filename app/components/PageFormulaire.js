"use client";

// permet d'aller chercher mes composants
import { useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import BlogCard from "./BlogCard";
import Footer from "./Footer";


//Permet d'ajouter une publication a ma bd

export default function PageFormulaire() {
    const [message , setMessage] = useState([]);
        
    return <>
        <Header />
        <NavBar />
        {/* il manque quelque  */}
        <Footer />
    </>
}