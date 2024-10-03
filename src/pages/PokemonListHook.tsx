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
    const [pokemonList, setPokemonList] = useState<{
        name: string, url: string}[]>([]);
    
    useEffect(() =>{
        const hook = async() => {
            const response = await Axios.get<Results>(`https://pokeapi.co/api/v2/pokemon?limit=` + total);
            setPokemonList(response.data.results);
        };
        hook();
    });

    return pokemonList;
};

export default Hook;
