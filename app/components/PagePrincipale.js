"use client";

// permet d'aller chercher mes composants
import React, { useEffect } from "react";
import Header from "./Header"
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import Footer from "./Footer";

export default function PagePrincipale() {
    useEffect(() => {
        // test de hook
        console.log("PagePrincipale montée");
      }, []);
    
    
    return <>
 
        {/* Je ne sais pas encore pourquoi mais je ne voie pas mes card dans mon affiche dans ma pageprincipale */}
        <BlogList />


    </>
} 
