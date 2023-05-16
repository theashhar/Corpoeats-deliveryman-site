import * as React from 'react'
// import { useRef, useState  } from "react";
// import { Link, useNavigate} from 'react-router-dom'
import logo_pink from '../assets/logo_pink.svg'
import profile from '../assets/profile.png'
import { logout } from '../functions/firebase'
import { useNavigate } from 'react-router-dom'


// export default function Navbar() {
export const Navbar = () => {
const navigate = useNavigate();
return (
<div className=' w-full top-0 left-0 pb-8' >
    <div className='flex items-center justify-between'>
      <img className='md:w-60 w-40' src={logo_pink}  />  
      <div className='flex items-center text-[#F472B6] justify-end' onClick={() => {
            logout();
            navigate('/');
          }}>
        {/* Logut Svg */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#F472B6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"  />
        </svg>
        Logout
      </div>
    </div>
      
      
</div>
        )
}
