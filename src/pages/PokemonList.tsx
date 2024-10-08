

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import CardSingle from "../components/PokemonListItem.tsx";
import PokemonListHook, { PokemonList } from "../hooks/PokemonListHook";
import { RootState, setSearchChanged, setSortChanged } from '../redux/store.tsx';

const Index: React.FC = () => {
  const {pokemonListOriginal} = PokemonListHook(20);
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonListOriginal);
  const dispatch = useDispatch();

  const displayGrid = useSelector((state : RootState) => state.displayGrid.value);
  const searchChanged = useSelector((state : RootState) => state.searchChanged.value);
  const searchItem = useSelector((state : RootState) => state.searchItem.value);
  const sortChanged = useSelector((state : RootState) => state.sortChanged.value);
  const sortType = useSelector((state : RootState) => state.sortType.value);

  const sort = (pokemonList : PokemonList[]) : PokemonList[] => {
    if (sortType.toLowerCase().includes("name-asc")) {
      const filteredList = pokemonList.sort((a, b) => {
          return a.name.localeCompare(b.name);
      });
      return filteredList;
    } else if (sortType.toLowerCase().includes("name-desc")) {
      const filteredList = pokemonList.sort((a, b) => {
          return b.name.localeCompare(a.name);
      });
      return filteredList;
    }
    else {
      return pokemonList;
    }
  }

  useEffect(() => {
    if (pokemonListOriginal && !searchItem) {
      setFilteredPokemonList(sort(pokemonListOriginal));
    } 
    if (searchChanged) {
      const filteredList = pokemonListOriginal.filter((pokemon) => (pokemon.name.toLowerCase().includes(searchItem.toLowerCase())));
      setFilteredPokemonList(sort(filteredList));
      dispatch(setSearchChanged(false));
    }
    if (sortChanged) {
      console.log(sortType);
      dispatch(setSortChanged(false));
      setFilteredPokemonList(sort(filteredPokemonList));
    }
  },  [searchChanged, searchItem, pokemonListOriginal, sortChanged, sortType, sort, dispatch]);

  return (
    <>
      <Header showTools={true}></Header>
        <div className='pt-[100px] flex items-center justify-center'>
          <h1 className='text-white text-[36px]'></h1>
        </div>
        
        <main >
          <div className={displayGrid ? "grid grid-cols-2 gap-4" : ""}>
          {filteredPokemonList ?  filteredPokemonList.map(pokemon => (<CardSingle url={pokemon.url}/>)): 'Loading' }
          </div>
        </main>
      </>
  );
}

export default Index;
