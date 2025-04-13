export default function FormulaireCache() {
    return (
    <div className="container" id="confirmationAjoutePublication" style="display: none;">
        <div className="row">
            <div className = "d-flex justify-content-center">
                <form id="confirmationPublication">
                    <div className="mb-3">
                        <label for="commentaire" className="form-label">Voulez-vous vraiment envoyer votre publication?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirmer</button>
                    <button type="reset" className="btn btn-primary">Annuler</button>
                </form>
            </div>
        </div>
    </div>
    );
}