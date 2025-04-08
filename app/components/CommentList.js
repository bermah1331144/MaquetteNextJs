//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

// permet d'aller chercher mes composants
import { useState, useEffect } from 'react';
import actions from "../actions";

//Sert afficher la liste des commentaire dans la page blog
export default function CommentList({blogId}) {
    //doit aller chercher mes infos dans mon API
    const [commentaires, setCommentaires] = useState([]);


    const getCommentairesAsyc = actions.fetchCommentaires();

    //utilse useEffect pour aller chercher mes commentaires
    useEffect(() => {
        getCommentairesAsyc(blogId).then((data => setCommentaires(data)))
        .catch(error => console.log(error)
        );
    }, [])
    
    return (    

        <>
       
            <div className="comment-list">
                {commentaires.map((commentaire) => (
                <Comment key={commentaire.id} commentaire={commentaire} />
                ))}
            </div>
        </>
    )

}