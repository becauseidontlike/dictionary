import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
const [keyword, setKeyword] = useState(props.defaultKeyword);
const [results, setResults] = useState(null);
const [loaded, setLoaded] = useState(false);
const [photos, setPhotos] = useState(null);
    
function handleResponse(response) {
setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
}

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse); 

let pexelsApiKey ="fmKiQNIw53wLZE2sywuJV8HWwJwMTm0HOm8KFLmrDlulrmJSRQBPGxGf";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;

let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse); 
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
        <Photos photos={photos} />
        </div>
    )
} else {
    load();
    return "Loading...";
}
}