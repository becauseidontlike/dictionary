import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import "./Synonyms.css";

export default function Meaning(props) {
console.log(props.meaning.synonyms);
    return(
        <div className="Meaning">
          <span className="mt-5 part">
          <strong><em>{props.meaning.partOfSpeech}</em></strong></span>
        
          {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <div className="def">
                    <strong>Definition: </strong>{definition.definition}
                    </div>
                    
                    <div className="example">
                    <strong>Example of usage:</strong> <em>{definition.example}</em>
                    </div>
                    <div>
                    <strong className="synonim">Synonyms:</strong> 
                    <Synonyms synonyms={definition.synonyms} />
                    </div>
                </div>
            );
          })}
           
        </div>
    );
}