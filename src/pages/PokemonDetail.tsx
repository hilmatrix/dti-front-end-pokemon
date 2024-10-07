

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import { capitalizeFirstChar } from "../helper/Helper.tsx";
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

    const calculateWidth = (health : number | undefined) => {
        if (!health)
            return 0;

        if (health <= 100) {
            return health;
        } else {
            return health/10;
        }
    }

    return (
        <>
            <Header showTools={false}></Header>
            <div className='flex flex-col h-[100vh] items-center justify-center pt-[100px]'>
                <div className='h-1/2 w-[500px] relative'>
                    <div className="w-[250px] h-[250px] inset-0 m-auto absolute">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`+pokemonHook?.id +`.png`}></img>
                    </div>
                    <div className="absolute text-[24px] left-[20px] top-[20px] text-[#97A0CC]">
                        <span>{pokemonHook ? '#' + (pokemonHook?.id + 1000) : ""}</span>
                    </div>
                </div>
                <div className='h-1/2 w-[500px] relative'>
                    <div className="text-[24px] left-[20px] top-[20px] text-[#FFFFFF]">
                        <span>{capitalizeFirstChar(pokemonHook ? pokemonHook.name : "")}</span>
                    </div>
                    <div className="text-[24px]  top-[20px] h-[200px] rounded-[20px] bg-[#05091B] relative flex flex-col">
                        <div className='w-[90%] h-[2px] top-[100px] left-[5%] bg-[#3D4466] absolute'>

                        </div>
                        <div className='h-1/2 w-[100%] flex flex-col'>
                            <div className='h-[30%] w-[100%] text-[#97A0CC] m-3'>Health</div>
                            <div className='h-[20%] w-[100%] '>
                                <div className='rounded-[4px] bg-[#FFFFFF] h-[10px] w-[90%] ml-[5%]'>
                                    <div className='rounded-[4px] bg-[#2AE3B7] h-[10px]' style={{ width: calculateWidth(pokemonHook?.stats[0].base_stat) + '%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[40%] w-[100%] flex'>
                                <div className='h-full w-[20%] text-[#FFFFFF] mb-3 ml-3'>{pokemonHook?.stats[0].base_stat}</div>
                                <div className='h-full w-[80%] text-[#FFFFFF] mb-3 ml-3'>{!pokemonHook ? "" :
                                    pokemonHook?.stats[2].base_stat <= 100 ? "from 100" : "from 1000"}</div>
                            </div>
                        </div>
                        <div className='h-1/2 w-[100%] flex'>
                            <div className='w-1/2 h-[100%] flex flex-col'>
                                <div className='h-1/2 w-[100%] text-[#97A0CC] m-3'>Attack</div>
                                <div className='h-1/2 w-[100%] text-[#FFFFFF] mb-3 ml-3'>{pokemonHook?.stats[1].base_stat}</div>
                            </div>
                            <div className='w-1/2 h-[100%] flex flex-col'>
                                <div className='h-1/2 w-[100%] text-[#97A0CC] m-3'>Defense</div>
                                <div className='h-1/2 w-[100%] text-[#FFFFFF] mb-3 ml-3'>{pokemonHook?.stats[2].base_stat}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;