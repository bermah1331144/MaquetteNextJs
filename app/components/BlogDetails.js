//Pour rendre composants fonctionnels cote serveur et cote client
"use client"


// permet d'aller chercher mes composants

export default function BlogDetails({blog}) {
    
    

     return (
        <div className="blog-details">
            <h2>{blog.titre}</h2>
            <div className="text-center col-12">
                <img src="/img-blog.jpg" className="img-fluid mx-auto d-block" style={{ maxWidth: '600px' }} alt="..."/>
                <p className="text-">Image</p>
            </div>
            <p>{blog.contenu}</p>
        </div>
    )
}