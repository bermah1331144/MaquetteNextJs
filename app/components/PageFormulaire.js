"use client";

// permet d'aller chercher mes composants
import Header from "./Header";
import NavBar from "./NavBar"; 
import Footer from "./Footer";
import FormulaireDetails from "./FormulaireDetails";
import actions from "../actions";

//Permet d'ajouter une publication a ma bd

export default function PageFormulaire() {
        
    return <>
        <Header />
        <NavBar />
        <FormulaireDetails />
        <Footer />
    </>
}