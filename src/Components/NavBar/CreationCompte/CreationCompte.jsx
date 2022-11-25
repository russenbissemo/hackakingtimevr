import "../CreationCompte/CreationCompte.css"

export default function ModalCreationCompte({showModalCreationCompte}) {

  return (
    <div
      tabIndex="-1"
      className="popUpModalCreationCompte" 
    >
      <div className="AllModalCreationCompte">
          <div className="positionModalCreationCompteSurLaPage">
          <div className="croixFermeture">
              <button onClick={()=> showModalCreationCompte ? showModalCreationCompte(false) : showModalCreationCompte(true)}>X</button>
            </div>
            <div className="divContainerCreationCompte">
        <div className="AllDivCreationCompte">
            <form className="FormulaireCreationCompte">
                <div className="titreFormulaireCreationCompteDiv">
                    <h1 className="titreFormulaireCreationCompte">Création de compte</h1>
                </div>
                <div className="inputFirstNameAndNameCreationCompte">
                    <div className="inputFirstNameCreationCompte">
                        <input type="text" />
                        <label>First Name</label>
                    </div>
                    <div className="inputLastNameCreationCompte">
                        <input type="text" />
                        <label>Last Name</label>
                    </div>
                </div>
                <div className="inputMailTelephoneCreationCompte">
                    <div className="inputMailCreationCompte">
                        <input type="mail" />
                        <label>E-Mail</label>
                    </div>
                    <div className="inputTelephoneCreationCompte">
                        <input type="text" />
                        <label>Téléphone</label>
                    </div>
                </div>
                  <div className="allAdresseCreationCompte"></div>
                    <div className="inputNumeroRueCreationCompte">
                      <input type="text" />
                      <label>Numéro de rue</label>
                    </div>
                    <div className="inputNomDeRueCreationCompte">
                      <input type="text" />
                      <label >Nom de rue</label>
                    </div>
                  <div className="allCodePostalVille">
                    <div className="inputCodePostalCreationCompte">
                      <input type="text" />
                      <label>Code postal</label>
                    </div>
                    <div className="inputVilleCreationCompte">
                      <input type="text" />
                      <label>Ville</label>
                    </div>
                  </div>
                  <div className="AllMotDePasse">
                    <div className="motDePasseCreationCompte">
                      <input type="password" />
                      <label>Mot de passe</label>
                    </div>
                    <div className="confirmationMotDePasseCreationCompte">
                      <input type="password" />
                      <label>Confirmation du mot de passe</label>
                    </div>
                  </div>
                </form>
                
             <div className="wrapper">
                    <button onClick={()=> showModalCreationCompte ? showModalCreationCompte(false) : showModalCreationCompte(true)} className="btn btn--border btn--primary btn--animated" type="submit">Je crée mon compte !</button>
                </div>
        </div>
      </div>
    </div>
</div>
</div>
  );
}
