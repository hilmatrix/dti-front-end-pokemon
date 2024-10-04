/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../assets/logo.png";
import Search from "../assets/search.png";
import { RootState, setDisplayGrid } from "../redux/store.tsx";

interface Parameters {
   showTools : boolean
}

const Index : React.FC<Parameters> = ({showTools}) => {
  const dispatch = useDispatch();
  const displayGrid = useSelector((state : RootState) => state.displayGrid.value);

    return (
        <header className="text-white h-[100px] fixed w-[100%] bg-[#252A3E] z-10">
          <div className="flex">
            <div  className='w-1/3 '><img className='h-full' src={Logo}></img></div>
            <div  className='w-1/3'></div>
            <div  className='w-1/3 flex items-center justify-end mx-[20px]'><img src={Search}></img></div>
          </div>
          <div className="w-full h-[2px] bg-[#3D4466]"></div>
          {showTools ? 
          <div className="py-[10px]">
            <div className="flex">
              <div  className='w-1/2 flex items-center justify-end '>
                <select className="w-[200px] h-[30px] bg-[#3D4466] text-[#97A0CC] rounded-[10px] px-[5px]" name="cars" id="cars">
                  <option value="sort-by">Sort by</option>
                </select>
              </div>
              <div  className='w-1/2 flex items-center justify-begin mx-[20px]'>
                <div className={`w-[40px] h-[30px] rounded-[10px] flex items-center justify-center relative ${displayGrid ?  'bg-[#3D4466]' : 'bg-[#000000]'}`}>
                    <div className='w-[10px] h-[10px] bg-[#97A0CC]'></div>
                    <button onClick={() => dispatch(setDisplayGrid(false))} className='w-[40px] h-[30px] absolute z-2 bg-[#00000000]'></button>
                </div>
                <div className='w-[2px] h-[30px] bg-[#97A0CC] '></div>
                <div className={`w-[40px] h-[30px] rounded-[10px] flex flex-col  items-center justify-center ${displayGrid ? 'bg-[#000000]' : 'bg-[#3D4466]'}`}>
                    <button onClick={() => dispatch(setDisplayGrid(true))} className='w-[40px] h-[30px] absolute z-2 bg-[#00000000]'></button>
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
          :
          <></>
          }
        </header>
    );
}

export default Index;