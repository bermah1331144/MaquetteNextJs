import db from "./db.js";


//permet de synchroniser les modification fait sur le serveur
export default async function syncData() {
    const response = await fetch("http://localhost:3000/publications");
    const data = await response.json();
    
    await db.collection('publications').delete();

    
    for (const publication of data) {
        await db.collection('publications').add(publication);
    }
}