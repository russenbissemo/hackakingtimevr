import React from "react";
import { themeList } from "../data/data";


const Frame = ({ theme }) => {

const description = themeList.filter(list => list.title === theme).map(list => list.description)
// const background = themeList.filter(list => list.title === theme).map(list => list.background)

    return (
        <div
            className="frame"
        >
        <p>{description}</p>
                </div>
    );
};

export default Frame;