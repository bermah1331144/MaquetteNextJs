"use server";
const nouvellepublication = {
    id : blogId,
    titre : ("titre"),
    aueur : ("auteur"),
    date : new Date().toISOString().split('T')[0],
    contenu : ("contenu")
}
// fait un fech mais du cote serveur 
// -------------------------------- PAS SUR PENTOUE --------------------------------
export async function AddPublicationBd({nouvellepublication, blogId}) {

    const blogId = formData.get("blogId");

    console.log('publication envoyé :', nouvellepublication);

    await fetch(`http://localhost:3001/publications/${blogId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ publication, blogId }),
    });
}

export async function AddCommentaireBd(formData) {
    const contenu = formData.get("contenu");
    const description = formData.get("description");
    const blogId = formData.get("blogId");
    console.log('Message envoyé :', contenu);
    await fetch(`http://localhost:3001/commentaires`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ contenu, description, blogId })
    });
}