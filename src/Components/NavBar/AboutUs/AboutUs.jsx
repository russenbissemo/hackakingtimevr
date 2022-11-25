import "./AboutUs.css";
import NavBar from "../NavBar";
import BackgroundVideo from "../../../img/background.mp4"


export default function AboutUs(){
    return(
        <section>
            <video id="background-video" loop autoPlay>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
            <NavBar />
        <div className="aboutUsContainer">

                <section className="sectionAboutUs">
                    <h1 style={{paddingBottom: "3em", fontSize: "2em", fontWeight: "bold"}}>Bienvenue chez HackingTimeVr</h1>

                    <p className="paragraphAboutUs">
                        HackingTimeVr basée à Toulouse est une plateforme d’éducation pour tout public mais plus tournée vers les enfants, les ados et les jeunes, parce que nous pensons qu’il est important de faire connaitre l’histoire marquant de nos pays, continents.

                        HackingTimeVr est une expérience immersive de 45min en moyenne où vous trouverez plusieurs thématiques au travers différentes époques des différents continents.

                        Notre objectif est de rendre ludique et attractif la connaissance de l’histoire ,car nous sommes dans un monde qui est de plus en plus connecté et digital.

                        L’expérience immersive permettra à nos clients de se projeter dans le temps passé avec une vision à 360° , ils seront au centre de l’époque et pourront visualiser l’histoire au plus près et dans les détails.

                        Venez Hackez l’histoire avec nous à travers le temps de manière immersive</p>
                </section>



            </div></section>
    )
}