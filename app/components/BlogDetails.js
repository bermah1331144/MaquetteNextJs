//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

// permet d'aller chercher mes composants
import { useState, useEffect } from 'react';
export default function BlogDetails({blogId}) {
    
    const [BlogDetails,setBlogDetails] = useState([]);
    // Va chercher me donnée avec un fetch


    // !!!! -----------    VOIR CommentList.js il a la reponse pour aller chercher id
    const fetchPublications =async () => {
        const reponse = await fetch(`http://localhost:3000/publications/${blogId}`);
        if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
        return await reponse.json();
    }
    
   //utilse useEffect pour aller chercher mes publications 
    useEffect(()=>{
        fetchPublications().then((data => setBlogDetails(data)))
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