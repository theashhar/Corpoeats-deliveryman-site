import React from 'react'
import { Order } from './Order'
import { Link, useNavigate,} from 'react-router-dom'
// import { Login } from './Login'
import { Navbar} from './Navbar';



function Home() {
  return (

 
  <div>
    {/* <Login />   */}
    <Navbar/>
    <Order />
    
  </div>




    


  )
}

export default Home