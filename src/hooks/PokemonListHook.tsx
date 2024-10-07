import Axios from 'axios';
import { useEffect, useState } from 'react';

interface PokemonList {
    name: string;
    url: string;
}

interface Results {
    results : PokemonList[]
}

const Hook = (total : number) => {
    const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
    const [pokemonListOriginal, setPokemonListOriginal] = useState<PokemonList[]>([]);
     
    useEffect(() =>{
        const hook = async() => {
            const response = await Axios.get<Results>(`https://pokeapi.co/api/v2/pokemon?limit=` + total);
            setPokemonList(response.data.results);
            setPokemonListOriginal([...response.data.results]);
        };
        hook();
    });

    return {pokemonList, pokemonListOriginal};
};

export default Hook;
