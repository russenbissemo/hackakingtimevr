import "./FormulaireReservation.css"

export default function FormulaireReservation(){
   return(
   <div className="AllDivFormulaireReservation">
        <form>
            <div className="FormulaireReservation">
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
                        <select name="nombrePersonnesSelect" id="nombrePersonnes" required>
                            <option value="" id="nombrePersonnes" selected>-- Nombre de personnes --</option>
                            <option id="1personne" value="1">1</option>
                            <option id="2personnes" value="2">2</option>
                            <option id="3personnes" value="3">3</option>
                            <option id="4personnes" value="4">4</option>
                            <option id="5personnes" value="5">5</option>
                            <option id="6personnes" value="6">6</option>
                            <option id="7personnes" value="7">7</option>
                            <option id="8personnes" value="8">8</option>
                            <option id="9personnes" value="9">9</option>
                            <option id="10personnes" value="10">10</option>
                        </select>
                </div> 
                <div className="tempsReservation">
                        <select name="tempsReservationSelect" id="tempsReservatoin" required>
                            <option value="" id="tempsReservation" selected>-- Temps d'immersion --</option>
                            <option id="30minutes" value="30minutes">30 minutes</option>
                            <option id="1heure" value="1heure">1 heure</option>
                            <option id="1heure30minutes" value="1heure30minutes">1 heure 30</option>
                        </select>
                </div> 
            </div>
            <button className="envoyerDemandeReservation" type="submit">Envoyez la demande</button>
        </form>
    </div>
   )
}