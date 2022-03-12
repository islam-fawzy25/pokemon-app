import React, { useEffect, useState } from 'react';
import "./card.css"
import { fetchDb } from '../../helper/fetchMethod';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className='hr'>
                <hr />
            </div>
            <div className='see-details'>
                <a href={`/pokemon/${pokemonName}`}>See Details</a>
            </div>
        </div>
    )
}