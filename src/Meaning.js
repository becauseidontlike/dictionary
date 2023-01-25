import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
console.log(props.meaning.synonyms);
    return(
        <div className="Meaning">
          <span className="mt-5">
          <strong><em>{props.meaning.partOfSpeech}</em></strong></span>
        
          {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    <strong>Definition: </strong>{definition.definition}
                    <br />
                    <strong>Example of usage:</strong> <em>{definition.example}</em>
                    <br />
                    <strong>Synonyms:</strong> 
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            );
          })}
           
        </div>
    );
}