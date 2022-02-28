import React, { useEffect, useState } from 'react';
import "./card.css"
import { fetchDb } from '../../helper/fetchMethod';
import { Link } from "react-router-dom";

export default function Card({ pokemonName }) {
    const [pokemonData, setPokemonData] = useState([])
    const [imageURl, setImageUrl] = useState("")
    const [pokemonAbilities, setPokemonAbilities] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetchDb(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemonData(response)
            setImageUrl(response.sprites.front_shiny)
            setPokemonAbilities(response.abilities)
        })()
    }, [])

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageURl} alt={pokemonName} />
            </div>
            <h3>{pokemonName}</h3>
            <div className='details-container'>
                <div>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Abiilities</p>
                </div>
                <div>
                    <p>{pokemonData.height}</p>
                    <p>{pokemonData.weight}</p>
                    {pokemonAbilities.map(pokemon => (
                        <div key={pokemon.ability.name}>
                            <p>{pokemon.ability.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className='see-details'>
                <Link to={`/pokemon/${pokemonName}`}>
                    <button >See Details</button>
                </Link>
            </div>
        </div>
    )
}