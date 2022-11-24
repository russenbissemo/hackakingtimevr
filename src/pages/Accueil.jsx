import {useState} from 'react';
import { themeList, cardList } from "../data/data";
import Card from "../Components/Card";
import Theme from "../Components/Theme";
import "../css/Section.css"


function Mapmonde(){
 const [themeSelected , setThemeSelected] =useState("")
 console.log(themeSelected)
    return (
        <section>
            <div className="earth">
                <div style={{height: "20em"}}>
                    {themeList.map(theme => <Theme setThemeSelected={setThemeSelected} title={theme.title} image={theme.url} />)}
                </div>
            </div>
       <div style={{display: "flex", gap: "1em"}} > {cardList.filter(card => card.theme === themeSelected).map(card => card.card).flat().map(card => <Card description={card.description}/>)}
        </div></section>
    );
    
}

export default Mapmonde;