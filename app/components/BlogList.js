//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

// permet d'aller chercher mes composants
import React, { useState, useEffect } from 'react';
import BlogCard from "./BlogCard"


//Doit aller chercher mes informatios de mes blogs dans mon API
export default function BlogList() {



    // Va chercher me donnée avec un fetch
    const fetchPublications =async () => {
        const reponse = await fetch('http://localhost:3000/publications');
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }

    const [blogList, setBlogList] = React.useState([]);

    // !!!! -----------    VOIR CommentList.js il a la reponse pour aller chercher id
    //utilse useEffect pour aller chercher mes publications
    React.useEffect (() => {
        fetchPublications().then((data => setBlogList(data)))
        .catch(error => console.log(error)
        );
    }, [])
    
    const blogCards = blogList.map(blog => <BlogCard key={blog.id} blog={blog} blogImage="/images/img-blog.jpg"/>)
    
    
    // -------------------------------------  Si Blogcard ne s'affiche pas semble est API non fonctionnelle p-e fetch  ------------------------------------- 


    return (
        <>
            

            <div className="container-card-container">
                <div className="row justify-content-center">
                    <div id="dynamicCardsContainer">
                        <div className="row row-cols-1 row-cols-md-3">  {/* Pas le bon nbr de card par ligne*/}
                            {blogCards}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
