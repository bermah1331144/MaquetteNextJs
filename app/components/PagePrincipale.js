"use client";

// permet d'aller chercher mes composants
import React, { useEffect } from "react";
import Header from "./Header"

export default function PagePrincipale() {
    useEffect(() => {
        // test de hook
        console.log("PagePrincipale montée");
      }, []);
    
    
    return <>
        <h1>Test Header</h1>
        <Header />

    </>
} 
