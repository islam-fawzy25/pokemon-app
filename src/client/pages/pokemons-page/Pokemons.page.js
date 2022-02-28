import React, { useEffect, useState, useMemo } from "react";
import "./pokemons-page.css"
import { fetchDb } from "../../helper/fetchMethod";
import Card from "../../components/main-card/card.component";
import ReactPaginate from "react-paginate";
import SelectNumberOfPages from "../../components/select-bar/SelectBar.component";
import Sort from "../../components/sort-bar/Sort.component";
import SearchBar from "../../components/search-bar/search.component";

export default function PokemonPage() {
    const [pokemonsData, setPokemonsData] = useState()

    //Select bar stats
    const [pokemonsPerPage, setPokemonsPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)
    const [numberOfPokemons, setNumberOfPokemons] = useState(20)

    const pokemonPerPgae = pokemonsPerPage
    const pagesVisited = pageNumber * pokemonPerPgae
    const pageCount = Math.ceil(numberOfPokemons / pokemonPerPgae)
    const changePage = ({ selected }) => { setPageNumber(selected) }

    // //Sort 
    const [sortDescending, setSortDescending] = useState(false)
    const [sortReverse, setSortReverse] = useState(false)
    //const [sortByHeight, setSortByHeight] = useState(false)
    // const [sortByWeight, setSortByWeight] = useState(false)
    const [pokemosByWeight, setPokemonsByWeight] = useState([])


    useMemo(async () => {
        setPokemonsData(pokemonsData.reverse())
        setPokemonsData(pokemonsData.sort())
        setPokemonsData(pokemonsData)
    }, [sortDescending, sortReverse])
    //  const sortDataReverse = useMemo(async()=>  setPokemonsData(pokemonsData.reverse()) ,[sortReverse])
    // const ByDataHeight = useMemo(async()=>  setPokemonsData(pokemonsData.sort()) ,[sortByHeight])
    // // const sortDataByWeight = useMemo(async()=>  setPokemonsData(pokemonsData.sort()) ,[sortByWeight])

    useEffect(() => {
        (async () => {
            const pokemonData = await fetchDb(`https://pokeapi.co/api/v2/pokemon?offset=40&limit=${numberOfPokemons}`)
            const pokemonsNames = await pokemonData.results.map(pokemon => pokemon.name)
            setPokemonsData(pokemonsNames)
        })()
    }, [sortReverse, setSortReverse])

    return (
        <div className="pokemon-page-container">
            <nav className="nav-bar">
                <div>
                    <SelectNumberOfPages setvalue={setPokemonsPerPage} />
                </div>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <Sort
                        arrayToSort={pokemonsData}
                        setSortDescending={setSortDescending}
                        sortDescending={sortDescending}
                        sortReverse={sortReverse}
                        setSortReverse={setSortReverse}
                    // sortByHeight={sortByHeight}
                    // setSortByHeight={setSortByHeight}
                    />
                </div>
            </nav>
            <section>
                <div>

                </div>
            </section>
            <main>
                {!pokemonsData && <h1>Loading ...</h1>}
                {pokemonsData && pokemonsData.slice(pagesVisited, pagesVisited + pokemonPerPgae)
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