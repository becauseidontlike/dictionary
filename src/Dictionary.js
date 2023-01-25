import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
const [keyword, setKeyword] = useState("");
    
function searchWord(event) {
        event.preventDefault();
        alert(`Searchin for ${keyword} definition`);
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

        </div>
    )
}