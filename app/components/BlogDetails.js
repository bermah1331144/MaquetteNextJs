//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

import actions from "../actions";

// permet d'aller chercher mes composants
import { useState, useEffect } from 'react';
export default function BlogDetails({blog}) {
    
    const [BlogDetails,setBlogDetails] = useState([]);
    
    const getPublications = actions.fetchDetailsPublications(blog)


   //utilse useEffect pour aller chercher mes publications 
    useEffect(()=>{
        getPublications().then((data => setBlogDetails(data)))
        .catch(error => console.log(error)
        );
     }, [])

     return (
        <div className="blog-details">
            <h2>{BlogDetails.titre}</h2>
            <div className="text-center col-12">
                <img src="/images/img-blog.jpg" className="img-fluid mx-auto d-block" style={{ maxWidth: '600px' }} alt="..."/>
                <p className="text-">Image</p>
            </div>
            <p>{BlogDetails.contenu}</p>
        </div>
    )
}