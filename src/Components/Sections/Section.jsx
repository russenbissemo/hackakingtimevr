import { useState } from 'react';
import "../../css/Section.css"
import SectionInfos from './SectionInfos';

const Period = () => {

    const [greece, setGreece] = useState(false)

    const pushClic = () => {
        setGreece(!greece)
    }

    return (
        <div className='periods'>
            <div className='earth'>

                <div>
                    <div onClick={pushClic} className='period farwest'>
                    <img src="./farwest.jpg" alt="" />
                    </div>
                    
                    <div onClick={pushClic} className='period grece'>
                        <img src="./grece.jpg" alt="" />
                    </div>

                    <div onClick={pushClic} className='period samurai'>
                        <img src="./samurai.jpg" alt="" />
                    </div>
                    
                </div>

            </div >
            <SectionInfos greece={greece} />
        </div>

    );
};

export default Period;
