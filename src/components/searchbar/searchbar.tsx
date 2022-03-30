import * as React from "react";

export default function Searchbar(){
    return (
        <>
            <input className="searchbar" placeholder="Search..." type="search" />
            <button>Search</button>
        </>
    );
}