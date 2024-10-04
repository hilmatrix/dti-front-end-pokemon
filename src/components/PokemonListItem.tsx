

import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonSingleHook from "../hooks/PokemonListItemHook";

interface Parameters {
    url : string;
}

const Index : React.FC<Parameters> = ({url}) => {
    const {subPage} = useParams();
    if (subPage)
        url = `https://pokeapi.co/api/v2/pokemon/${subPage}/`
    const pokemonHook = PokemonSingleHook(url);

    const handleClick = () => {
        window.location.href = `/detail/${pokemonHook?.id}/`;
      };

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white rounded-[30px] h-[300px] w-[300px]  m-[20px] relative'>
                <div className='absolute z-10 inset-0'>
                    <button onClick={() => {handleClick()}} className='w-[100%] h-[100%]'></button>
                </div>
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