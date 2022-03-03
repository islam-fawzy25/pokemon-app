import React, { useEffect, useState } from 'react';
import "./Single-card.css"
import { fetchDb } from '../../helper/fetchMethod';
import { useParams } from "react-router-dom";
import DropDown from '../dropDown/DropDown.component';

export default function SingleCard() {
    const [pokemonData, setPokemonData] = useState([])
    const [imageURl, setImageUrl] = useState()
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonForms, setPokemonForms] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemonGameIndices, setPokemonGameImdices] = useState([])
    const [pokemonStats, setPokemonStats] = useState([])
    const [pokemonMoves, setPokemonMoves] = useState([])

    const param = useParams()
    const [abilitiesVisible, setAbilitiesVisible] = useState(false)
    const [formsVisible, setFormsVisible] = useState(false)
    const [typesVisible, setTypesVisible] = useState(false)
    const [gameIndicesVisible, setGameIndicesVisible] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const [movesVisible, setMovesVisible] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await fetchDb(`https://pokeapi.co/api/v2/pokemon/${param.name}`)
            setPokemonData(response)
            setImageUrl(response.sprites.front_shiny)
            setPokemonAbilities(response.abilities)
            setPokemonForms(response.forms)
            setPokemonTypes(response.types)
            setPokemonGameImdices(response.game_indices)
            setPokemonStats(response.stats)
            setPokemonMoves(response.moves)
        }
        )()
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])

    return (
        <div className='singl-card-container'>
            <div className='singl-card-image-container'>
                <img src={imageURl} alt={pokemonData.name} />
            </div>
            <h3>{pokemonData.name}</h3>
            <div className='singl-card-details-container'>
                <div className='singl-card-details'>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <p>Base experience: {pokemonData.base_experience}</p>
                    <p>Default: {String(pokemonData.is_default)}</p>
                    <p>Order: {pokemonData.order}</p>
                </div>
                <div className='dropdwon-container'>
                    <div>
                        <DropDown
                            visible={abilitiesVisible}
                            onClick={() => { setAbilitiesVisible(!abilitiesVisible) }}
                            title="Abilities"
                        >
                            {pokemonAbilities.map(pokemon => (
                                <div key={pokemon.ability.name}>
                                    <li>{pokemon.ability.name}</li>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                    <div>
                        <DropDown
                            visible={formsVisible}
                            onClick={() => { setFormsVisible(!formsVisible) }}
                            title="Forms"
                        >
                            {pokemonForms.map(pokemon => (
                                <div key={pokemon.name}>
                                    <li>{pokemon.name}</li>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                    <div>
                        <DropDown
                            visible={typesVisible}
                            onClick={() => { setTypesVisible(!typesVisible) }}
                            title="Types"
                        >
                            {pokemonTypes.map(pokemon => (
                                <div key={pokemon.slot}>
                                    <li>Slot: {pokemon.slot}</li>
                                </div>
                            ))}
                            {pokemonTypes.map(pokemon => (
                                <div key={pokemon.type.name}>
                                    <li>Name: {pokemon.type.name}</li>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                    <div>
                        <DropDown
                            visible={gameIndicesVisible}
                            onClick={() => { setGameIndicesVisible(!gameIndicesVisible) }}
                            title="Game indices"
                        >
                            {pokemonGameIndices.map(pokemon => (
                                <div key={pokemon.version.name}>
                                    <div>
                                        <li>Game index: {pokemon.game_index}</li>
                                    </div>
                                    <div>
                                        <li>Version: {pokemon.version.name}</li>
                                    </div>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                    <div>
                        <DropDown
                            visible={statsVisible}
                            onClick={() => { setStatsVisible(!statsVisible) }}
                            title="Stats"
                        >
                            {pokemonStats.map(pokemon => (
                                <div key={pokemon.stat.name}>
                                    <div>
                                        <li>Name: {pokemon.stat.name}<p>Effort: {pokemon.effort}</p>  Base stat: {pokemon.base_stat}</li>
                                    </div>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                    <div>
                        <DropDown
                            visible={movesVisible}
                            onClick={() => { setMovesVisible(!movesVisible) }}
                            title="Moves"
                        >
                            {pokemonMoves.map(pokemon => (
                                <div key={pokemon.move.name}>
                                    <div>
                                        <li>Move: {pokemon.move.name}
                                            <p></p>
                                        </li>
                                    </div>
                                </div>
                            ))}
                        </DropDown>
                    </div>
                </div>
            </div>
        </div>
    )
}