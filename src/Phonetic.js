import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props);
    
    return(
        <div className="Phonetic mb-3">
           <span className="sound">{props.phonetic.text}</span>
          
           <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    );
}