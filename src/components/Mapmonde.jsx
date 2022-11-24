import "../css/Mapmonde.css";
import {useState} from 'react';
import {themeList,section} from "../data/MapmondeObjet";
import Card from "../components/Card";
import Theme from "../components/Theme";


function Mapmonde(){
 const [themeSelected , setThemeSelected] =useState("")
 console.log(themeSelected)
    return (
        <div className ="">
        {section.map(element => <Theme setThemeSelected={setThemeSelected} title={element.title}/>)}
        {themeList.filter(card => card.theme === themeSelected).map(card => card.card).flat().map(card => <Card description={card.description}/>)}
        </div>
    );
    
}

export default Mapmonde;