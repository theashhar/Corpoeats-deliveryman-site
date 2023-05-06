import React from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import { FaCheck } from 'react-icons/Fa';
import { ImCancelCircle, ImLocation2 } from 'react-icons/im';

export const Picked = () => {
    return (

<div class="w-11/12 h-1/4 bg-lightred mx-auto my-auto rounded-lg shadow-lg">
<div class="relative">
<div class="py-3 flex-col">
    {/* ITEMS */}
  <div class="px-3 py-1 flex items-center">
    <span class=" text-left">Masala Dosa (item 1)</span>
    <span class="ml-auto ">x1</span>
  </div>
  <div class="px-3 py-1 flex items-center">
    <span class="text-left">Idli (item 1)</span>
    <span class="ml-auto ">x1</span>
  </div>
  
     {/* order ID */}
     <div class="flex justify-center items-center py-1 pt-4">  
     <div class="w-11/12 h-1/4 bg-slate-300 mx-auto my-auto rounded-lg "> {/* bg-gray-400 not loading */}
      <div class=" text-gray-600 text-sm relative py-1 flex-col">     
        <div class="px-3 flex items-center">
            <span class=" text-left ">Order ID: <span> 3423 </span></span>
            <span class="ml-auto "><ImLocation2 /></span>
        </div>
    </div>
    </div>
    </div>
 {/* order Details */}
    <div class="flex justify-center items-center pb-4">  
     <div class="w-11/12 h-1/4 bg-slate-300 mx-auto my-auto rounded-lg "> {/* bg-gray-400 not loading */}
      <div class=" text-gray-600 text-sm relative py-3 flex-col">     
        <div class="px-3 flex items-center">
            <span class=" text-left ">Order item</span>
            <span class="ml-auto ">4</span>
        </div>
        <div class="px-3 flex items-center">
            <span class="text-left ">Pickup Stall</span>
            <span class="ml-auto ">1</span>
        </div>
        <div class="px-3 flex items-center">
            <span class=" text-left ">Name</span>
            <span class="ml-auto">Raju</span>
        </div>
        <div class="px-3 flex items-center">
            <span class="text-left ">Phone</span>
            <span class="ml-auto">98652465</span>
        </div>
        <div class="px-3 flex items-center">
            <span class=" text-left ">Address</span>
            <span class="ml-auto ">E1251</span>
        </div>
        <div class="px-3 flex items-center">
            <span class="text-left ">Landmark</span>
            <span class="ml-auto  ">4</span>
        </div>
        <div class="px-3 flex items-center">
            <span class="text-left ">Floor</span>
            <span class="ml-auto ">4</span>
        </div>


       </div>
     </div>
    </div>
    
   {/* BUTTONS */}
<div id='buttons' class=' flex justify-center items-center '>
    <div class="flex  space-x-4 justify-between items-center py-2">  
     <button  class=" relative w-11/12 h-1/4 bg-greenyes hover:bg-greenhover transform hover:scale-105 transition-all duration-80 mx-auto my-auto rounded-lg "> {/* bg-gray-400 not loading */}
     <Link to='/delivered'> <div class="py-2 flex-col">            
        <div class="px-3 py-1 flex items-center">
            <span class=" text-left text-white"><FaCheck /></span>
            <span class="ml-2 pr-2 text-white text-xl font-semibold">PickUp</span>
        </div>
       </div>
      </Link>       
     </button>


     < button class= " relative w-11/12 h-1/4 ring-2 ring-red-600 hover:ring-3 transform hover:scale-105 transition-all duration-80 mx-auto my-auto rounded-lg "> {/* bg-gray-400 not loading */}
      
       <div class="py-2 flex-col">            
        <div class="px-3 py-1 flex items-center">
            <span class=" text-left text-red-600 font-semibold"><ImCancelCircle /></span>
            <span class="ml-auto px-2 text-red-600 text-xl font-semibold">Cancel</span>
        </div>
       </div>    
     </button>

    </div>
  </div>
  </div>
</div>
</div>  )
}


