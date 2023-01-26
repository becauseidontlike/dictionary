import React from "react";

export default function Phonetic(props) {
    console.log(props);
    
    return(
        <div classname="Phonetic">
           <em>{props.phonetic.text}</em>
           <br />
           <a href={props.phonetic.audio} target="_blank" el="noreferrer">Listen</a>
        </div>
    );
}