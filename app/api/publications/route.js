
// On va chercher mes publications
export async function GET(requete){

    const reponse = await fetch('http://localhost:3000/publications');
    const data = await res.json();
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await reponse.json(data);
}

// On va ajouter mes publications
export async function POST(requete){

    const reponse = await fetch('http://localhost:3000/publications', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nouvellepublication }),
    });
    const data = await reponse.json();
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await reponse.json(data);
}

// On va modifier mes publications
export async function PUT(requete){

    const reponse = await fetch(`http://localhost:3000/publications/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nouvellepublication }),
    });    
    const data = await reponse.json();
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await reponse.json(data);
}

// On va supprimer mes publications
export async function DELETE(requete){

    const reponse = await fetch(`http://localhost:3000/publications/${id}`, {
        method: "DELETE",
    });    
    const data = await reponse.json();
    if(!reponse.ok) throw new Error(`Erreur lors de la requête : ${reponse.status}`);
    return await reponse.json(data);
}