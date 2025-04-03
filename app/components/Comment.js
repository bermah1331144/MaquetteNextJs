export default function Comment ({commentaire}){
    return (
    <div className="container" id="commentaireBd">
        <div className="d-flex justify-content-left">
            <svg className = "img-client bi bi-person-square" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 25 25">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
            <div>
                <p className="text-start">Avis : {commentaire.contenu}</p>
        
                <p className="text-start">Description : {commentaire.description}</p>
            </div>
        </div>
    </div>
    )
}