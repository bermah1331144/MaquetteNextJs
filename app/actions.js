"use server";
// fait un fech mais du cote serveur 
// -------------------------------- PAS SUR PENTOUE --------------------------------
export async function AddPublicationBd({nouvellepublication, blogId}) {

    const titre = formData.get("titre");
    const auteur = formData.get("auteur");
    const contenu = formData.get("contenu");

    const nouvellepublication = {
        titre,
        auteur,
        date: new Date().toISOString(),
        contenu
    };

    console.log('publication envoyé :', nouvellepublication);

    await fetch(`http://localhost:3001/publications/${blogId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nouvellepublication }),
    });
}

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
}