import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
const [keyword, setKeyword] = useState("");
const [results, setResults] = useState(null);
    
function handleResponse(response) {
console.log(response.data[0].meanings[0].definitions[0].definition)
setResults(response.data[0]);
}

function searchWord(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
}


function handleKeywordChange(event) {
console.log(event.target.value)
setKeyword(event.target.value);
}

    return(
        <div className="Dictionary">
        <form onSubmit={searchWord}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
        </div>
    )
}