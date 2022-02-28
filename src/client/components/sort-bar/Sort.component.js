import React, { useEffect, useState } from "react";
import { fetchDb } from "../../helper/fetchMethod";

export default function Sort({
  sortDescending,
  setSortDescending,
  sortReverse,
  setSortReverse,
  sortByHeight,
  setSortByHeight,
  setPokemonsData,
  pokemonsData
}) {

  return (
    <>
      <select>
        <option >sort ...</option>
        <option onClick={() => { setSortDescending(!sortDescending) }} >From A-Z</option>
        <option onClick={() => { setSortReverse(!sortReverse) }}>From Z-A</option>
        <option onClick={() => { setSortByHeight(!sortByHeight) }}>By Height</option>
        <option onClick={() => { }}>By weight</option>
      </select>
    </>
  )
}
