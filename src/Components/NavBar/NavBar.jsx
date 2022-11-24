import { useState } from "react";
import "../NavBar/NavBar.css";
import ModalConnexion from "../NavBar/Connexion/ModalConnexion";
import ModalCreationCompte from "../NavBar/CreationCompte/CreationCompte";

export default function NavBar(){

    const [showModalConnexion, setShowModalConnexion] = useState(false);
    
    const modalConnexion =(e) =>{
        e.preventDefault()
            setShowModalConnexion(true);
          }

    const [showModalCreationCompte, setShowModalCreationCompte] = useState(false);
    const modalCreationCompte =(e) =>{
        e.preventDefault()
            setShowModalCreationCompte(true);
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
                    <li onClick={(modalConnexion)}>Connexion</li>
                    <li onClick={(modalCreationCompte)}>Création de compte</li>
                </ul>
            </div>
            </section>
            {showModalConnexion ? <ModalConnexion showModalConnexion = {setShowModalConnexion} /> : null}
            {showModalCreationCompte ? <ModalCreationCompte showModalCreationCompte= {setShowModalCreationCompte} /> : null}
        </div>
    )
}