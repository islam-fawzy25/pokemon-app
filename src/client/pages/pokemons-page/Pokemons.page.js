import React, { useEffect, useState } from "react";
import "./pokemons-page.css"
import { fetchDb } from "../../helper/fetchMethod";
import Card from "../../components/main-card/card.component";
import ReactPaginate from "react-paginate";
import SelectNumberOfPages from "../../components/select-bar/SelectBar.component";
import Sort from "../../components/sort-bar/Sort.component";
import SearchBar from "../../components/search-bar/search.component";

export default function PokemonPage() {
    const [pokemonsData, setPokemonsData] = useState()
    //Select bar stats +  // Pagination
    const [pokemonsPerPage, setPokemonsPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)
    const [numberOfPokemons, setNumberOfPokemons] = useState(400) // for a new feature * user can choose total of pokemons 
    const pokemonPerPgae = pokemonsPerPage
    const pagesVisited = pageNumber * pokemonPerPgae
    const pageCount = Math.ceil(numberOfPokemons / pokemonPerPgae)
    const changePage = ({ selected }) => { setPageNumber(selected) }
    //Sort 
    const [sortDescending, setSortDescending] = useState(false)
    const [sortReverse, setSortReverse] = useState(false)
    // Search bar
    const [displaySearch, setDisplaySearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        (async () => {
            const pokemonData = await fetchDb(`https://pokeapi.co/api/v2/pokemon?offset=40&limit=${numberOfPokemons}`)
            const pokemonsNames =  pokemonData.results.map(pokemon => pokemon.name)
            setPokemonsData(() => {
                if (sortReverse) { return setPokemonsData(pokemonsNames.sort((a, b) => { return b.localeCompare(a) })) }
                if (sortDescending) { return setPokemonsData(pokemonsNames.sort((a, b) => { return a.localeCompare(b) })) }
                return pokemonsNames
            })
            const filteredSearchResult =  pokemonsNames.filter(pokemon => pokemon.includes(searchValue))
            if(searchValue){  return  setSearchResult(filteredSearchResult)}
            if (filteredSearchResult.length === 400) {return setDisplaySearch(false) }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortReverse, sortDescending, displaySearch,searchValue])

    return (
        <div className="pokemon-page-container">
            <nav className="nav-bar">
                <div>
                    <SelectNumberOfPages setvalue={setPokemonsPerPage} />
                </div>
                <div>
                    <SearchBar
                        setDisplaySearch={setDisplaySearch}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div>
                    <Sort
                        setSortDescending={setSortDescending}
                        setSortReverse={setSortReverse}
                    />
                </div>
            </nav>
            <main>
                {!pokemonsData && <h1>Loading ...</h1>}

                {!displaySearch && pokemonsData &&
                    pokemonsData.slice(pagesVisited, pagesVisited + pokemonPerPgae)
                        .map((pokemon) => (
                            <div key={pokemon}>
                                <Card pokemonName={pokemon}> </Card>
                            </div>
                        ))}

                {displaySearch && searchResult.slice(pagesVisited, pagesVisited + pokemonPerPgae)
                    .map((pokemon) => (
                        <div key={pokemon}>
                            <Card pokemonName={pokemon}> </Card>
                        </div>
                    ))}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    marginPagesDisplayed={1}
                    initialPage={0}
                />
            </main>
        </div>
    )
}

