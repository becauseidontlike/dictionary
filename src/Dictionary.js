import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
const [keyword, setKeyword] = useState(props.defaultKeyword);
const [results, setResults] = useState(null);
const [loaded, setLoaded] = useState(false);
    
function handleResponse(response) {
console.log(response.data[0].meanings[0].definitions[0].definition)
setResults(response.data[0]);
}

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse); 
}



function searchWord(event) {
event.preventDefault();
search();
}

function load(){
    setLoaded(true);
    search();
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}
if (loaded) {
    return(
        <div className="Dictionary">
        <section className="word">
            <h1>DICTIONARY</h1>
        <form onSubmit={searchWord}>
        <input type="search" defaultValue={props.defaultKeyword} autoFocus={true} onChange={handleKeywordChange} />
        <div className="hint mt-3">
            What do you want to learn about today?
        </div>
        </form>
        </section>
        <Results results={results} />
        </div>
    )
} else {
    load();
    return "Loading...";
}
}