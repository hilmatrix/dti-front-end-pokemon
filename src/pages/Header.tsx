/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import Logo from "../assets/logo.png";
import Search from "../assets/search.png";

const Index : React.FC = () => {
    return (
        <header className="text-white h-[100px] fixed w-[100%] bg-[#252A3E] z-10">
          <div className="flex ">
            <div  className='w-1/6'><img src={Logo}></img></div>
            <div  className='w-2/3'></div>
            <div  className='w-1/6 flex items-center justify-end mx-[20px]'><img src={Search}></img></div>
          </div>
          <div className="w-full h-[2px] bg-[#3D4466]"></div>
          <div className="py-[10px]">
            <div className="flex">
              <div  className='w-1/2 flex items-center justify-end '>
                <select className="w-[200px] h-[30px] bg-[#3D4466] text-[#97A0CC] rounded-[10px] px-[5px]" name="cars" id="cars">
                  <option value="sort-by">Sort by</option>
                </select>
              </div>
              <div  className='w-1/2 flex items-center justify-begin mx-[20px]'>
                <div className='w-[40px] h-[30px] bg-[#3D4466] rounded-[10px] flex items-center justify-center'>
                    <div className='w-[10px] h-[10px] bg-[#97A0CC]'></div>
                </div>
                <div className='w-[2px] h-[30px] bg-[#97A0CC] '></div>
                <div className='w-[40px] h-[30px] bg-[#000000] rounded-[10px] flex flex-col  items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[8px] h-[8px] bg-[#97A0CC] m-[1px]'></div>
                        <div className='w-[8px] h-[8px] bg-[#97A0CC] m-[1px]'></div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-[8px] h-[8px] bg-[#97A0CC] m-[1px]'></div>
                        <div className='w-[8px] h-[8px] bg-[#97A0CC] m-[1px]'></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}

export default Index;