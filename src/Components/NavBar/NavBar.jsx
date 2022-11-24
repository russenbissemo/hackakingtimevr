import "../NavBar/NavBar.css"

export default function NavBar(){
    return(
        <div className="NavBarContainer">
            <section className="topNavBar">
            <div>
            LOGO
          </div>
            <div>
                <ul className="menu">
                    <li>About Us</li>
                    <li>Connexion / Création de Compte</li>
                </ul>
            </div>
            </section>
        </div>
    )
}