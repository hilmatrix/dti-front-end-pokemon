

import React from 'react';
import { useSelector } from 'react-redux';
import Header from "../components/Header";
import CardSingle from "../components/PokemonListItem.tsx";
import PokemonListHook from "../hooks/PokemonListHook";
import { RootState } from '../redux/store.tsx';

const Index: React.FC = () => {
  const pokemonHook = PokemonListHook(10);
  const displayGrid = useSelector((state : RootState) => state.displayGrid.value);

  return (
    <>
      <Header></Header>
        <div className='pt-[100px] flex items-center justify-center'>
          <h1 className='text-white text-[36px]'></h1>
        </div>
        
        <main className='pt-[100px]'>
          <div className={displayGrid ? "grid grid-cols-2 gap-4" : ""}>
          {pokemonHook ?  pokemonHook.map(pokemon => (<CardSingle url={pokemon.url}/>)): 'Loading' }
          </div>
        </main>
      </>
  );
}

export default Index;
