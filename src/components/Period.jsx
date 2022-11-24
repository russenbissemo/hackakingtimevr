import React from 'react';
import { useState } from 'react';
import './period.css'
import PeriodInfos from './PeriodInfos';

const Period = () => {

    const [greece, setGreece] = useState(false)

    const pushClic = () => {
        setGreece(!greece)
    }

    return (
        <div className='Periods'>
            <div className='earth'>
                <div><div onClick={pushClic} className='Period__Un'>
                    <img src="./Far-West.jpg" alt="" />
                </div>
                    <div onClick={pushClic} className='Period__Deux'>
                        <img src="./Grèce.jpg" alt="" />
                    </div>
                    <div onClick={pushClic} className='Period__Trois'>
                        <img src="./samurai.jpg" alt="" />
                    </div></div>

            </div >
            <PeriodInfos greece={greece} />
        </div>

    );
};

export default Period;
