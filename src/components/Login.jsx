import {Link} from 'react-router-dom'
import logo_white from '../assets/logo_white.svg'
import login_icon from '../assets/login_icon.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {login, isLogged} from '../functions/firebase'
export const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  useEffect(() => {
    if (isLogged()) {
      navigate('/orders')
    }
  })
    return (

<div className='flex flex-col items-center pt-10   bg-logored rounded-xl h-screen overflow-hidden'>
 
 <img className=' w-40 max-sm:mt-10' src={logo_white} />
 <img className=' w-16 mt-16 text-white' src={login_icon} />  
  <div className="flex flex-col justify-center items-center py-2">
      <input type="tel" placeholder="Phone Number" required className=" relative py-3  my-7 flex-col px-4 md:w-full w-64 text-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-lg text-2xl"
      value={phone} onChange={(e) => setPhone(e.target.value)} 
      />    
     <button type='submit' className='text-xl w-full py-3 bg-red-900 mx-auto my-auto rounded-lg text-white mb-10' 
      onClick={(e) => {
        e.target.disabled = true;
        e.target.innerText = 'Sending OTP...';
        login('+91'+phone).then((res) => {
          if (res) {
            console.log(res);
            window.phoneAuth = res;
            navigate('/OTP')
          }
        });
        
      }}
     >Get OTP</button>
     <div id="sign-in-button"></div>
  </div>
</div>


  )
}

