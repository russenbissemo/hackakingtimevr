import { useState } from 'react';
import { themeList, cardList } from "../data/data";
import NavBar from '../Components/NavBar/NavBar';
import Theme from "../Components/Theme";
import Card from "../Components/Card";
import Frame from '../Components/Frame';
import "../css/Theme.css"
import ScrollContainer from 'react-indiana-drag-scroll'

function Mapmonde() {

    const [themeSelected, setThemeSelected] = useState()
    // const [showFrame, setShowFrame] = useState()

    return (
        <section
        // onClick={() => themeSelected && setThemeSelected(null)}
        >
            <NavBar />
            <div className="earth-container">

                <ScrollContainer className="earth">
                    <div
                        style={{ height: "38em" }}
                    >
                        {themeList.map(theme =>
                            <Theme
                                id="theme"
                                setThemeSelected={setThemeSelected}
                                title={theme.title}
                                image={theme.url}
                            />)
                        }
                    </div>
                </ScrollContainer>

            </div>
            <div style={{ display: "flex", gap: "1em" }}>
                {cardList
                    .filter(card => card.theme === themeSelected)
                    .map(card => card.card).flat()
                    .map(card => <Card description={card.description} image={card.image} title={card.title} />)}
            </div>
        </section>
    );

}

export default Mapmonde;