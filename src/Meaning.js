import React from "react";

export default function Meaning(props) {
console.log(props.meaning);
    return(
        <div className="Meaning">
          {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br />
                    <p>Example of usage</p>
                    <em>{definition.example}</em>
                    </p>
                </div>
            );
          })}
           
        </div>
    );
}