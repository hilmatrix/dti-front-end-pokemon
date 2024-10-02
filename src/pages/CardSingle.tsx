

import React from 'react';
import Image from '../assets/bulbasaur.png';

const Index : React.FC = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white rounded-[30px] h-[300px] w-[300px]  m-[20px] relative'>
                <div className="w-[200px] h-[200px]   inset-0  m-auto  absolute">
                    <img src={Image}></img>
                </div>
                <div className="absolute text-[24px] left-[20px] top-[20px] text-[#11B047]">
                    <span>Grass</span>
                </div>

                <div className="absolute text-[24px] right-[20px] top-[20px] text-[#263156]">
                    <span>#1001</span>
                </div>

                <div className="w-[80%] absolute text-[24px] left-1/2 transform -translate-x-1/2 bottom-[20px] text-[#263156]">
                    <span>Name in one line</span>
                </div>
            </div>
        </div>
    );
}

export default Index;