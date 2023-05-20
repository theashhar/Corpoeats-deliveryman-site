import { useEffect, useState } from 'react'
import { useNavigate,} from 'react-router-dom'
import { FaCheck } from 'react-icons/Fa';
import { ImCancelCircle } from 'react-icons/im';
import { BsFillSendCheckFill } from 'react-icons/bs';
import { FiPackage } from 'react-icons/Fi';
import { isLogged, RegNotif } from '../functions/firebase';
export const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(Math.random());
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    } else {
      RegNotif()
    }
    setLoading(true)
    async function fetchData() {
      const response = await fetch('https://corpoeats-backend.vercel.app/api/orders/all')
      const data = await response.json()
      return data.orders
    }
    fetchData().then(data => {
       setOrders(data)
        setLoading(false)
    })
    addEventListener(
      "new-order",
      (e) => {
        console.log(e.detail);
        setRefresh(Math.random())
      },
      false
    );
  },[refresh])
  return (
      <>
           {orders.map((order) => (
          <div className="w-11/12 h-1/4 bg-lightred mx-auto my-4 rounded-lg shadow-lg" key={order.id}>
          <div className="relative">
          <div className="py-3 flex-col">
              {/* ITEMS */}
            {order.line_items.map((item) => (
              <div className="px-3 py-1 flex items-center" key={item.id}>
              <span className=" text-left">{item.name}</span>
              <span className="ml-auto ">x{item.quantity}</span>
            </div>
            ))}            
              {/* order ID */}
          
              <div className="flex justify-center items-center py-2">  
               <div className="w-11/12 h-1/4 bg-slate-300 mx-auto my-auto rounded-lg "> 
                 <div className="text-gray-600 text-sm relative py-3 flex-col">
                      
                  <div className="px-3 py-1 flex items-center">
                      <span className=" text-left">Order Id</span>
                      <span className="ml-auto ">{order.name}</span>
                  </div>
                  <div className="px-3 py-1 flex items-center">
                      <span className="text-left">Order item</span>
                      <span className="ml-auto ">{order.line_items.length}</span>
                  </div>
                 </div>
              
               </div>
              </div>

              {/* Customer Details */}

              {
                order.shipping_address ? (<>
                   <div className="flex justify-center items-center py-2">
                <div className="w-11/12 h-1/4 bg-slate-300 mx-auto my-auto rounded-lg ">
                  <div className="text-gray-600 text-sm relative py-3 flex-col">
                    <div className="px-3 py-1 flex items-center">
                      <span className=" text-left">Customer Name</span>
                      <span className="ml-auto ">{order.shipping_address.first_name}</span>
                    </div>
                    <div className="px-3 py-1 flex items-center">
                      <span className=" text-left">Customer Phone</span>
                      <span className="ml-auto ">{order.shipping_address.phone}</span>
                    </div>
                    <div className="px-3 py-1 flex items-center">
                      <span className=" text-left">Customer Address</span>
                      <span className="ml-auto ">{order.shipping_address.address1} ,{order.shipping_address.city}</span>
                    </div>
                    <div className="px-3 py-1 flex items-center">
                      <span className=" text-left">Customer Location</span>
                      <span className="ml-auto ">{order?.shipping_address.address2}</span>
                    </div>
                  </div>
                </div>
              </div>
                </>):''
              }


          
             {/* BUTTONS */}
          <div id='buttons' className=' flex justify-center items-center '>
              <div className="flex  space-x-4 justify-between items-center py-2">  
               {order.note === "0" ? (<>
                Order Not Accepted Yet
               </>):''}
               {order.note === "1" ? (<>
                Order Not Packed Yet
               </>):''}
               {
                  order.note === "2" ? (<>
                 <button className="relative w-full h-1/4 bg-slate-950 hover:bg-slate-800 transform hover:scale-105 transition-all duration-80 mx-auto my-auto rounded-lg" onClick={()=>{
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
                  
                  var raw = JSON.stringify({
                    "order": {
                      "id": order.id,
                      "note": "3"
                    }
                  });
                  
                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };
                  
                  fetch("https://corpoeats-backend.vercel.app/api/orders/update", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                      console.log(result)
                      setRefresh(Math.random())
                    })
                    .catch(error => console.log('error', error));
                 }}>
    <div className="px-3 py-3 flex justify-center items-center h-full">
      <span className="text-white text-xl"><BsFillSendCheckFill /></span>
      <span className="ml-2 text-white text-xl font-semibold">Pick Up</span>
    </div>
               </button>
                  </>):''
               }

               {
                  order.note === "-1" ? (<>
                      Order Cancelled
                  </>):''
               }

{
                  order.note === "3" ? (<>
                 <button className="relative w-full h-1/4 bg-slate-950 hover:bg-slate-800 transform hover:scale-105 transition-all duration-80 mx-auto my-auto rounded-lg" onClick={()=>{
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
                  
                  var raw = JSON.stringify({
                    "order": {
                      "id": order.id,
                      "note": "4"
                    }
                  });
                  
                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };
                  
                  fetch("https://corpoeats-backend.vercel.app/api/orders/update", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                      console.log(result)
                      setRefresh(Math.random())
                    })
                    .catch(error => console.log('error', error));
                 }}>
    <div className="px-3 py-3 flex justify-center items-center h-full">
      <span className="text-white text-xl"><BsFillSendCheckFill /></span>
      <span className="ml-2 text-white text-xl font-semibold">Order Droped</span>
    </div>
               </button>
                  </>):''
               }

               {
                loading ? (<>
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                  </div>
                </>):''
               }

{
                  order.note === "4" ? (<>
                      Order Deliverd
                  </>):''
               }

              </div>
            </div>
            </div>
          </div>
          </div>
        ))}
        </>
  )
}
