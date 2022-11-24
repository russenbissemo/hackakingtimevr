import "../ModalValidationFormulaireReservation/ModalValidationFormulaireReservation.css"

export default function ModalValidationFormulaireReservation() {

  return (
    <div
      tabIndex="-1"
      className="popUpModal" 
    >
      <div className="AllModal">
          <div className="positionModalSurLaPage">
            <h3 className="titleTextModal">
              Votre demande à bien était prise en compte, nous vous recontacteront dès que possible.
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="boutonModalValidationReservation"
            >
              Super, merci !
            </button>
        </div>
      </div>
    </div>
  );
}
