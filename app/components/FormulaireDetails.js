export default function FormulaireDetails() {
    return (
    <div className="container d-flex justify-content-center aling-items-center">
        <div className="row">
            <div className="col-12 text-center">
                <h1>Formulaire</h1>
            </div>        
            <form className="publicationForm">
                <table className="table">
                    <tr>
                        <th className="col-12 text-center">Formulaire d'ajout de publication</th>
                    </tr>
                    <tr>
                        <td><label for="titre">Titre :</label></td>
                        <td><input type="text" id="titre" name="titre"/></td>
                    </tr>
                    <tr>
                        <td><label for="auteur">Auteur :</label></td>
                        <td><input type="text" id="auteur" name="auteur"/></td>
                    </tr>
                    <tr>
                        <td><label for="contenu">Contenu</label></td>
                        <td><textarea className="form-control" id="contenu" name="contenu"></textarea></td>
                    </tr>
                </table>
            </form>
            <div className="d-flex justify-content-end"> 
                <button type="submit" id="openDialog" className="btn btn-primary">Confirmation</button>
            </div>
        </div>
    </div>
    );
}