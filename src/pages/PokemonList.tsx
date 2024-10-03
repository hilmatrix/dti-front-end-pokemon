import React from 'react';
import Header from "./Header";
import PokemonListHook from "./PokemonListHook";
import CardSingle from "./PokemonSingle";

const Index: React.FC = () => {
  const pokemonHook = PokemonListHook(10);

  return (
    <>
        <Header></Header>
        <div className='pt-[100px] flex items-center justify-center'>
          <h1 className='text-white text-[36px]'></h1>
        </div>
        <main className='pt-[100px]'>
          {pokemonHook ?  pokemonHook.map(pokemon => (<CardSingle name={pokemon.name} url={pokemon.url}/>)): 'Loading'}
        </main>
        
    </>
  );
}

export default Index;
