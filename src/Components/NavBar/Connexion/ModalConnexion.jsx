import React from "react";
import "../Connexion/ModalConnexion.css"

export default function ModalConnexion({ showModalConnexion }) {



  return (
    <div
      tabIndex="-1"
      className="popUpModalConnexion" 
    >
      <div className="AllModalConnexion">
          <div className="positionModalConnexionSurLaPage">
            <div className="croixFermeture">
              <button onClick={()=> showModalConnexion ? showModalConnexion(false) : showModalConnexion(true)}>X</button>
            </div>
            <div className="divContainerConnexion">
        <div className="AllDivConnexion">
            <form className="FormulaireConnexion">
                <div className="titreFormulaireConnexionDiv">
                    <h1 className="titreFormulaireConnexion">Connexion</h1>
                </div>
                <div className="inputMailTelephoneConnexion">
                    <div className="inputMailConnexion">
                        <input type="mail" />
                        <label>E-Mail</label>
                    </div>
                </div>
                <div className="motDePasseConnexion">
                    <input type="password" />
                    <label>Mot de passe</label>
                </div>
              
                </form>
                <div className="wrapper">
                    <button onClick={()=> showModalConnexion ? showModalConnexion(false) : showModalConnexion(true)}
 className="btn btn--border btn--primary btn--animated" type="submit">Je me connecte !</button>
                </div>
    
        </div>
      </div>
    </div>
</div>
</div>
  );
}
