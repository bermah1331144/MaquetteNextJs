"use server";




//Permet de ajouter une publication dans ma bd du cote serveur
// -------------------------------- PAS SUR PENTOUE --------------------------------
export default async function AddPublicationBd({formData, blogId}) {

    const titre = formData.get("titre");
    const auteur = formData.get("auteur");
    const contenu = formData.get("contenu");

    const nouvellePublication = {
        titre,
        auteur,
        date: new Date().toISOString(),
        contenu
    };

    console.log('publication envoyé :', nouvellePublication);

    await fetch(`http://localhost:3001/publications/${blogId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nouvellePublication }),
    });

    await synchro();    
}


//Permet de ajouter un commentaire dans ma bd
export async function AddCommentaireBd(formData) {
    
    const blogId = formData.get("blogId");
    const publicationId = formData.get("publicationId");
    const contenu = formData.get("contenu");
    const description = formData.get("description");

    const nouveauCommentaire = {
        publicationId,
        date: new Date().toISOString(),
        contenu,
        description
    };

   
    console.log('commentaire envoyé :', nouveauCommentaire);
    await fetch(`http://localhost:3001/commentaires`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( nouveauCommentaire ),
    });

    await synchro();
}

//Permet d'aller chercher les details d'une publication
export async function fetchDetailsPublications(blogId) {
    const response = await fetch(`http://localhost:3001/publications/${blogId}`);  
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await response.json();
}

//Permet d'Aller chercher toute les publications
export async function fetchPublications() { 
    const response = await fetch("http://localhost:3001/publications");
  
    if (!response.ok) {
      throw new Error(`Erreur lors de la requête : ${response.status}`);
    }
  
    return await response.json();
  }
//permet d'aller chercher tout les commentaires
export async function fetchCommentaires() {
    const response = await fetch(`http://localhost:3001/commentaires`);  
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await response.json();
}