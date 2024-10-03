

import React from 'react';
import PokemonSingleHook from "./PokemonSingleHook";

interface Parameters {
    name : string;
    url : string;
}

const Index : React.FC<Parameters> = ({url}) => {
    const pokemonHook = PokemonSingleHook(url);

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white rounded-[30px] h-[300px] w-[300px]  m-[20px] relative'>
                <div className="w-[200px] h-[200px]   inset-0  m-auto  absolute">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`+pokemonHook?.id +`.png`}></img>
                </div>
                <div className="absolute text-[24px] left-[20px] top-[20px] text-[#11B047]">
                    <span>{pokemonHook?.types[0].type.name}</span>
                </div>

                <div className="absolute text-[24px] right-[20px] top-[20px] text-[#263156]">
                    <span>{pokemonHook ? '#' + (pokemonHook?.id + 1000) : ""}</span>
                </div>

                <div className="w-[80%] absolute text-[24px] left-1/2 transform -translate-x-1/2 bottom-[20px] text-[#263156]">
                    <span>{pokemonHook?.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Index;