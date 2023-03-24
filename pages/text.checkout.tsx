
import React from 'react'
import {useState} from 'react';
import createOred from '../components/createOred'
import createPayment from "../components/createPayment"
import { useRouter } from 'next/router'

function Cart() {
  const [orderId ,setOrderId] = useState('')
  const [payLink, setPayLink] = useState('')
  
  const router = useRouter()

  const customer = "appu"
  const Address = "line1" 
  const City = 'city'
  const State = 'state'
  const pinCode = "820934" 
  const phone =  "8908989833" 
  const phone2 = "8908988903"
  const item = {"products": [
    {
        "_id": "6416a2bcc138c58e335b09d0",
        "title": "Scalp Brush",
        "desc": "Lorem ipsum dolor sit amet consectetur. Congue ipsum velit integer iac…",
        "img": [],
        "prices": []
    }
],} 
  const total = "67"
  
  const handilClick=()=>{
    createOred(customer, Address, City,State,pinCode, phone , phone2, item, total)
  .then(function(result) {
    console.log(result.data._id); // "initResolve"
    setOrderId(result.data._id)
    handilClickBuy()
    return "normalReturn";
  })
  } 
  const order_id = orderId
  const order_amount = total
  const customer_id = "customer_"+Date.now()
  const customer_name = customer
  const customer_email = 'ahgsj@ghaj.vom'
  const customer_phone = phone
  

    const handilClickBuy=()=>{
      createPayment(
      order_id,
      order_amount,
      customer_id,
      customer_name,
      customer_email,
      customer_phone
  )
     .then(function(result) {
       console.log(result.data.payment_link); // "initResolve"
       router.push(result.data.payment_link)
       
       return "normalReturn";
     })
     }

  return (
    <div>
      <>
      <div>
       hay
      </div>
      <button onClick={()=> handilClick()}>orfrt</button>
      <button onClick={()=> handilClickBuy()}>buy</button>
    </>
    </div>
  )
}

export default Cart
