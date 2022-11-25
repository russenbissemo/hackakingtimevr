import React from "react";
import { useState } from "react";
import "../NavBar/NavBar.css";
import ModalConnexion from "../NavBar/Connexion/ModalConnexion";
import ModalCreationCompte from "../NavBar/CreationCompte/CreationCompte";
import { Link } from "react-router-dom"


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
        <>
            <div className="topNavBar">
            <div>
            LOGO
          </div>
            <div>
                <ul className="menu">
                  <Link to ="/apropos"> 
                    <li>About Us</li></Link>
                    <li onClick={(modalConnexion)}>Connexion</li>
                    <li onClick={(modalCreationCompte)}>Création de compte</li>
                </ul>
            </div>
            </div>
            {showModalConnexion ? <ModalConnexion showModalConnexion = {setShowModalConnexion} /> : null}
            {showModalCreationCompte ? <ModalCreationCompte showModalCreationCompte= {setShowModalCreationCompte} /> : null}
        </>
    )
}