import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import PokemonPage from './client/pages/pokemons-page/Pokemons.page';
import SingleCard from './client/components/single-card/SingleCard.component';
import SinglePokemonPage from './client/pages/single-pokemon-page/SinglePokemon.page';
function App() {
  return (
    <div className="App">
          < Routes>   
          <Route  path="/" element={<PokemonPage/> } />
          <Route  path="/pokemon/:name" element={<SinglePokemonPage /> } />

      </ Routes>
    </div>
  );
}

export default App;
