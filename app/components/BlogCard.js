"use client";

import Link from "next/link";
//Afficher mes publications dans une card et je lui passe des props
export default function BlogCard({blog }) {

return (
    <div className="col">
      <div className="card">
            <div className="card">
                <img src="/img-blog.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 > {blog.titre}</h5>
                        <p> {blog.contenu}</p>
                        <Link href={`/blog/${blog.id}`} className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </div>
    </div>


);
}
