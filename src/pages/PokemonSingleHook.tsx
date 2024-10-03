import Axios from 'axios';
import { useEffect, useState } from 'react';

interface Types {
    type: Type;
}

interface Type {
    name: string;
}

interface PokemonData {
    id : number,
    name : string,
    types : Types[]
}

const Hook = (url : string) => {
    const [pokemonData, setPokemonData] = useState<PokemonData | undefined>(undefined);
    
    useEffect(() =>{
        const hook = async() => {
            const response = await Axios.get<PokemonData>(url);
            setPokemonData(response.data);
        };
        hook();
    });

    return pokemonData;
};

export default Hook;
