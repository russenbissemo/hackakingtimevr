import "../src/css/Mapmonde.css";
import {useState} from 'react';
import {themeList,cardList} from "../src/data/data";
import Card from "./components/Card";
import Theme from "./components/Theme";


function Mapmonde(){
 const [themeSelected , setThemeSelected] =useState("")
 console.log(themeSelected)
    return (
        <div className ="">
        {themeList.map(element => <Theme setThemeSelected={setThemeSelected} title={element.title}/>)}
       <div style={{display: "flex", gap: "1em"}} > {cardList.filter(card => card.theme === themeSelected).map(card => card.card).flat().map(card => <Card description={card.description}/>)}
        </div></div>
    );
    
}

export default Mapmonde;