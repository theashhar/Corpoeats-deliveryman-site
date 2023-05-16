import {Link} from 'react-router-dom'
import logo_white from '../assets/logo_white.svg'
import login_icon from '../assets/login_icon.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function OTP(){
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  return ( 
<div className='flex flex-col items-center pt-10 mb bg-logored rounded-xl h-screen overflow-auto' >
 
    <img className=' w-40 max-sm:mt-10 ' src={logo_white} />
    <img className=' w-16 mt-16 text-white' src={login_icon} />
    
  <div className="flex flex-col justify-center items-center py-2 ">
      <input type="number" id='number'  placeholder=" Enter OTP"  required className=" relative py-3  my-7 flex-col px-2 md:w-full w-64 text-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-lg text-2xl text-center"
      value={otp} onChange={(e) => setOtp(e.target.value)}
      />    
      <button type='submit' className='text-xl w-full py-3 bg-greenyes hover:bg-greenhover transform hover:scale-105 transition-all duration-80  mx-auto my-auto rounded-lg text-white' 
      onClick={(e) => {
        e.target.disabled = true;
        e.target.innerText = 'Verifying...';
        window.phoneAuth.confirm(otp).then((res) => {
          if (res) {
            console.log(res);
            navigate('/orders')
          }
        });
      }}
       >Verify</button>
    <Link to='/' className='underline  underline-offset-2 text-white mt-2'>
      <span className='text-xs '>Resend OTP</span>
    </Link>
  </div>
</div>
  )
}
