import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PgFOF from './components/PgFOF.JSX';
import {Picked} from './components/Picked.jsx';
import {Delivered} from './components/Delivered.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
 
    <Navbar/>
        <Routes> 
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path='/picked' element={<Picked />}/>
          <Route exact path='/delivered' element={<Delivered />}/>
          <Route exact path='*' element={<PgFOF />}/>

        </Routes>    
     </BrowserRouter>
   
    </>
  )
}

export default App
