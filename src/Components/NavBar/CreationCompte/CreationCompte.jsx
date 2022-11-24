import "../CreationCompte/ModalCreationCompte.css"

export default function ModalCreationCompte() {

  return (
    <div
      tabIndex="-1"
      className="popUpModal" 
    >
      <div className="AllModalCreationCompte">
          <div className="positionModalCreationCompteSurLaPage">
            <div className="divContainerCreationCompte">
        <div className="AllDivCreationCompte">
            <form className="FormulaireCreationCompte">
                <div className="titreFormulaireCreationCompteDiv">
                    <h1 className="titreFormulaireCreationCompte">CreationCompte</h1>
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
              
                </form>
                
            <button
              data-modal-toggle="popupmodalCreationCompte"
              type="button"
              className="boutonModalValidationCreationCompte"
            >
              Super, merci !
            </button>
        </div>
      </div>
    </div>
</div>
</div>
  );
}
