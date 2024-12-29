import React from 'react';
import "../btnStyles.css";
import DownArrow from "../images/DownArrowIcon.png";

export default function MoreButton(){
    return(
        <button 
            id="moreBtn"
            src={DownArrow}
            >
            More
        </button>
    )
}