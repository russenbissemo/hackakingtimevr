import { useState } from "react";
import "../NavBar/NavBar.css"
import ModalConnexion from "../NavBar/Connexion/ModalConnexion"

export default function NavBar(){

    const [showModalConnexion, setShowModalConnexion] = useState(false);


    const modalConnexion =(e) =>{
        e.preventDefault()
            setShowModalConnexion(true);
          }
    

    return(
        <div className="NavBarContainer">
            <section className="topNavBar">
            <div>
            LOGO
          </div>
            <div>
                <ul className="menu">
                    <li>About Us</li>
                    <li onClick={(modalConnexion)}>Connexion / Création de Compte</li>
                </ul>
            </div>
            </section>
            {showModalConnexion ? <ModalConnexion showModalConnexion = {setShowModalConnexion} /> : null}
        </div>
    )
}