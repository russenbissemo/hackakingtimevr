import "../../src/css/Mapmonde.css";
import {useState} from 'react';
import { themeList, cardList } from "../data/data";
import Sections from "../Components/Sections/Section"
import Card from "../Components/Card";
import Theme from "../Components/Theme";


function Mapmonde(){
 const [themeSelected , setThemeSelected] =useState("")
 console.log(themeSelected)
    return (
        <section>
            <div style={{height: "20em"}}>
                <Sections />
            </div>
        {themeList.map(element => <Theme setThemeSelected={setThemeSelected} title={element.title}/>)}
       <div style={{display: "flex", gap: "1em"}} > {cardList.filter(card => card.theme === themeSelected).map(card => card.card).flat().map(card => <Card description={card.description}/>)}
        </div></section>
    );
    
}

export default Mapmonde;