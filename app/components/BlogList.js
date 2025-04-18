//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

// permet d'aller chercher mes composants
import { useState, useEffect } from 'react';
import BlogCard from "./BlogCard"
import actions from "../actions";
import { fetchPublications } from '../actions';
import Image from 'next/image';


//Doit aller chercher mes informatios de mes blogs dans mon API
export default function BlogList() {

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        async function chargerPublications() {
          try {
            const getPublications = await fetchPublications()
            setBlogList(getPublications);
          } catch (error) {
            console.error("Erreur lors du chargement des publications :", error);
          }
        }
    
        chargerPublications();
      }, []);
    
    const blogCards = blogList.map(blog => <BlogCard key={blog.id} blog={blog} blogImage="/images/img-blog.jpg"/>)
    

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
