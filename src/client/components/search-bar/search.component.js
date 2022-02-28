import React, {  useState } from "react";
import Card from "../main-card/card.component";

export default function SearchBar({displaySearch,setDisplaySearch}){
    const[searchValue, setSearchValue]=useState()
    return(
        <>
               <input type="text" placeholder="Search Teams"
               value={searchValue}
                onChange={(e)=>{ 
                    setSearchValue(e.target.value)
                    setDisplaySearch(true)
                    }}/>
                    {/* <Card pokemonName={searchValue}/> */}
        </>
    )
}