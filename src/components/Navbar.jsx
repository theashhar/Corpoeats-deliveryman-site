import React from 'react'
import logo_pink from '../assets/logo_pink.svg'
import profile from '../assets/profile.png'


const Navbar = () => {
  return (
    <div className=' w-full top-0 left-0 pb-8' >
    <div className='flex items-center justify-between'>
      <img className='md:w-60 w-40' src={logo_pink}  />  
      <img className='md:w-20 w-12 rounded-lg' src={profile}  />
    </div>
      
      
</div>
  )
}

export default Navbar