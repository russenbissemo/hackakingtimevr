import { useState } from "react";
import "./FormulaireReservation.css";
import devisPersonnalise from "../FonctionDevis/DevisPersonnalise";
import FonctionDevis from "../FonctionDevis/FonctionDevis";

export default function FormulaireReservation(){

    const [price, setPrice] = useState("")
    console.log(price);

   return(
   <div className="AllDivFormulaireReservation">
        <form>
            <div className="titreFormulaireReservationDiv">
                <h1 className="titreFormulaireReservation">Formulaire de réservation</h1>
            </div>
            <div className="inputFirstNameAndName">
                <div className="inputFirstName">
                    <input type="text" required/>
                    <label>First Name</label>
                </div>
                <div className="inputLastName">
                    <input type="text" required/>
                    <label>Last Name</label>
                </div>
            </div>
            <div className="inputDateReservationHeureReservation">
                <div className="dateReservation">
                    <input type="date" required/>
                </div>
                <div className="heureReservation">
                    <input type="time" required/>
                </div>
            </div>
            
            <div className="AllNombrePersonnesTemps">
                <div className="nombrePersonnes">
                    <select onChange={(e) => setPrice (e.target.value)} name="nombrePersonnesSelect" id="nombrePersonnes" required>
                        <option value="titleSelect" id="nombrePersonnes" selected>-- Nombre de personnes --</option>
                            {devisPersonnalise.map((devisPerso, index) => (
                                <option  key={devisPerso.id} id={devisPerso.id} value={devisPerso.nombrePersonnes}>{devisPerso.nombrePersonnes}</option>
                            ))}
                    </select> 
                </div> 
                    <div className="tempsReservation">
                            <select name="tempsReservationSelect" id="tempsReservatoin" required>
                                <option value="" id="tempsReservation" selected>-- Temps d'immersion --</option>
                                <option key="tempsImmersion" id="tempsImmersion" value="">45 min</option>
                            </select>
                            
                    </div> 
                </div>
                  <div className="devis">
                        <FonctionDevis 
                        devisPrice={price}
                        />
                    </div>
            
            <div className="wrapper">
                <button className="btn btn--border btn--primary btn--animated" type="submit">Envoyer la demande</button>
            </div>
        </form>
    </div>
   )
}