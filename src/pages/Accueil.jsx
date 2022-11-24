import {useState} from 'react';
import { themeList, cardList } from "../data/data";
import Theme from "../Components/Theme";
import Card from "../Components/Card";
import Frame from '../Components/Frame';
import "../css/Theme.css"


function Mapmonde(){
 const [themeSelected , setThemeSelected] = useState()
 console.log(themeSelected)
    return (
        <section
        onClick={() => themeSelected && setThemeSelected(null)}>
            <div className="earth-container">
                <div className="earth">
                    <div
                        style={{ height: "38em" }}
                    >
                        {themeList.map(theme =>
                            <Theme
                                setThemeSelected={setThemeSelected}
                                title={theme.title}
                                image={theme.url}
                            />)
                        }
                    </div>
                </div>
                <Frame
                    theme={themeSelected}/>
            </div>
            <div style={{ display: "flex", gap: "1em" }}>
                {cardList
                    .filter(card => card.theme === themeSelected)
                    .map(card => card.card).flat()
                    .map(card => <Card description={card.description} />)}
        </div></section>
    );
    
}

export default Mapmonde;