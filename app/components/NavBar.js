import Link from "next/link";

export default function NavBar() {
    return (
    <div className="container-fluid-card">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <form className="container-fluid">
                    <div className="input-group">
                        <span className="input-group-image d-inline-block align-text-top" id="basic-addon1"><img src="/loupe.png" alt="Logo" width="40" height="40" /></span>
                        <input type="text" className="form-control" placeholder="Rechercher" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </form>
            </div>
            <div className="col-6 col-md-2">
                <p>Trier par : </p>
            </div>
            <div className="col-6 col-md-1">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
            </div>
        </div>
    </div>
);
}