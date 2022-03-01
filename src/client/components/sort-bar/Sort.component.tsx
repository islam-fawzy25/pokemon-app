import React from "react";

interface Props {
  sortDescending: boolean
  setSortDescending: (sortDescending: boolean) => void
  sortReverse: boolean
  setSortReverse: (sortReverse: boolean) => void
}

export default function Sort({
  sortDescending,
  setSortDescending,
  sortReverse,
  setSortReverse
}: Props) {

  return (
    <>
      <select>
        <option >sort ...</option>
        <option onClick={() => {
          setSortReverse(false)
          setSortDescending(true)
        }} >From A-Z</option>
        <option onClick={() => {
          setSortDescending(false)
          setSortReverse(true)
        }}>From Z-A</option>
        {/* <option onClick={() => { setSortByHeight(!sortByHeight) }}>By Height</option>
        <option onClick={() => { }}>By weight</option> */}
      </select>
    </>
  )
}
