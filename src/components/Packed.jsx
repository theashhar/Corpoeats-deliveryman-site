import React from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import { FiPackage } from 'react-icons/Fi';

export const Packed = () => {
  return (
    <div className="w-11/12 h-1/4 bg-lightred mx-auto my-auto rounded-lg shadow-lg">
<div className="relative">
<div className="py-3 flex-col">
    {/* ITEMS */}
  <div className="px-3 py-1 flex items-center">
    <span className=" text-left">Masala Dosa (item 1)</span>
    <span className="ml-auto ">x1</span>
  </div>
  <div className="px-3 py-1 flex items-center">
    <span className="text-left">Idli (item 1)</span>
    <span className="ml-auto ">x1</span>
  </div>
  
    {/* order ID */}

    <div className="flex justify-center items-center py-2">  
     <div className="w-11/12 h-1/4 bg-slate-300 mx-auto my-auto rounded-lg "> {/* bg-gray-400 not loading */}
      <div className="relative">
       <div className="py-3 flex-col">
            
        <div className="px-3 py-1 flex items-center">
            <span className=" text-left">Order Id</span>
            <span className="ml-auto ">E1251</span>
        </div>
        <div className="px-3 py-1 flex items-center">
            <span className="text-left">Order item</span>
            <span className="ml-auto ">4</span>
        </div>
       </div>
    </div>
     </div>
    </div>

   {/* BUTTONS */}
<div id='buttons' className='py-2' >
  
 <button className="relative w-11/12 h-1/4 bg-yellow-600 hover:bg-yellow-500 transform hover:scale-105 transition-all duration-80 mx-auto my-auto rounded-lg">
    <div className="px-3 py-3 flex justify-center items-center h-full">
      <span className="text-white text-xl"><FiPackage /></span>
      <span className="ml-2 text-white text-xl font-semibold">Packed</span>
    </div>
</button>
  </div>
  </div>
</div>
</div>
  )
}
