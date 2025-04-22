//Pour rendre composants fonctionnels cote serveur et cote client
"use client"

// permet d'aller chercher mes composants
import { useState, useEffect } from 'react';
import {AddCommentaireBd}  from "../actions";
import { useRouter } from 'next/navigation';


export default function AddComment({blogId}) {
    const [contenu, setContenu] = useState('');
    const [description, setDescription] = useState('');
    const [commentaires, setCommentaires] = useState([]);
    const [confirmation, setConfirmation] = useState(null);   
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
      setConfirm(true);
    }, []);
    const HandleSumbit = async(e) => {
        e.preventDefault();
    
        await confirmationAjoutCommentaire(nouveauCommentaire());
    const nouveauCommentaire = {
        publicationId: blogId,
        date : new Date().toISOString().split('T')[0],
        contenu,
        description

    }
    return nouveauCommentaire
}


async function confirmationAjoutCommentaire(nouveauCommentaire) {
   const reponseAjoutCommentaireBd = await AddCommentaireBd(nouveauCommentaire);
 

    if(reponseAjoutCommentaireBd) {
        console.log("commentaire ID :", reponseAjoutCommentaireBd.id);
        setAuteur('');
        setContenu('');
        setCommentaires([...commentaires, reponseAjoutCommentaireBd]);
        setCommentaires("Votre commentaire a été ajouté avec succès.");
    }
    else{
        setConfirmation("Echec de l'ajout du commentaire.");    
    } 
    return reponseAjoutCommentaireBd

    }

    return (

    <div className="card mt-4 p-3">
        <h5 className="card-title">Ajouter un commentaire</h5>
            <form onSubmit = {HandleSumbit}/>
                <div className="row g-2">
                    <div className="col"></div>
                        <input
                            type="text"
                            placeholder="Avis du jeu"
                            value={contenu}
                            onChange={(e) => setContenu(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description du jeu"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit" onClick={HandleSumbit}>Ajouter un commentaire</button>
                    </div>
                </div>

    ) 

}

function btn() {
    return (
        <button className="btn btn-primary" id="envoyer">Envoyer</button>
    )
}