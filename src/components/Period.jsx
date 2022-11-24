import React from 'react';
import { useState } from 'react';
import './period.css'
import PeriodInfos from './PeriodInfos';

const Period = () => {

    const [pyramide, setPyramide] = useState(false)

    const pushClic = () => {
        setPyramide(!pyramide)
    }

    return (
        <div className='Periods'>
            <div onClick={pushClic} className='Period__Un'>
                <img src="./Pyramide.jpg" alt="" />
            </div>
            <div onClick={pushClic} className='Period__Un'>
                <img src="./Grèce.jpg" alt="" />
            </div>
            <PeriodInfos pyramide={pyramide} />
        </div >
    );
};

export default Period;
