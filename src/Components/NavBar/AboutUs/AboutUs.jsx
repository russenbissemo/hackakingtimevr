import "./AboutUs.css";
import NavBar from "../NavBar";


export default function AboutUs(){
    return(
        <><div>
            <NavBar />
        </div><div className="aboutUsContainer">

                <section className="sectionAboutUs">
                    <h1>Bienvenue chez HackingTimeVr</h1>

                    <p className="paragraphAboutUs">
                        HackingTimeVr basée à Toulouse est une plateforme d’éducation pour tout public mais plus tournée vers les enfants, les ados et les jeunes, parce que nous pensons qu’il est important de faire connaitre l’histoire marquant de nos pays, continents.

                        HackingTimeVr est une expérience immersive de 45min en moyenne où vous trouverez plusieurs thématiques au travers différentes époques des différents continents.

                        Notre objectif est de rendre ludique et attractif la connaissance de l’histoire ,car nous sommes dans un monde qui est de plus en plus connecté et digital.

                        L’expérience immersive permettra à nos clients de se projeter dans le temps passé avec une vision à 360° , ils seront au centre de l’époque et pourront visualiser l’histoire au plus près et dans les détails.

                        Venez Hackez l’histoire avec nous à travers le temps de manière immersive</p>
                </section>



            </div></>
    )
}