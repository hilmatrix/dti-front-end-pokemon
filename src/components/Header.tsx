/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../assets/logo.png";
import Search from "../assets/search.png";
import { RootState, setDisplayGrid, setSearchChanged, setSearchItem, setSortChanged, setSortType } from "../redux/store.tsx";

interface Parameters {
   showTools : boolean
}

const Index : React.FC<Parameters> = ({showTools}) => {
  const dispatch = useDispatch();
  const displayGrid = useSelector((state : RootState) => state.displayGrid.value);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchItem(event.target.value));
    dispatch(setSearchChanged(true));
  };

  const handleSortChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(event.target.value));
    dispatch(setSortChanged(true));
    console.log("Sort = " + event.target.value)
  };

    return (
        <header className="text-white h-[100px] fixed w-[100%] bg-[#252A3E] z-10">
          <div className="flex relative">
            <div  className='w-1/3 '><img className='h-full' src={Logo}></img></div>
            <div  className='w-1/3'></div>
            <div  className='w-1/3 flex items-center justify-end mx-[20px]'>
                <input onChange={handleSearchChange} className={`w-[${showSearch ? "200px" : "0px"}] mr-[20px] rounded-[8px] text-[#000000]`}></input>
                <img src={Search}></img>
                <button onClick={() => setShowSearch(!showSearch)} className='bg-[#00000000] w-[40px] h-[40px] absolute'></button>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#3D4466]"></div>
          {showTools ? 
          <div className="py-[10px]">
            <div className="flex">
              <div  className='w-1/2 flex items-center justify-end '>
                <select onChange={handleSortChange} className="w-[200px] h-[30px] bg-[#3D4466] text-[#97A0CC] rounded-[10px] px-[5px]" name="cars" id="cars">
                  <option value="none">Sort by</option>
                  <option value="name-asc">Name Ascending</option>
                  <option value="name-desc">Name Descending</option>
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