import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import {Login} from './components/Login';
import PgFOF from './components/PgFOF';
import OTP from './components/OTP';
function App() {
  
  return (
    <>
    {/* <div className='bg-gray-400 w-full h-screen'> </div> */}
  <BrowserRouter>
     <Routes> 
       <Route exact path='/' element={<Login />}/>
       <Route exact path='/orders' element={<Home />}/>
       <Route exact path='/otp' element={<OTP />}/>
       <Route exact path='*' element={<PgFOF />}/>
     </Routes>    
  </BrowserRouter>



    
    </>
  )
}

export default App
