import React from 'react'
import Link from "next/link";

import {AiFillPlusSquare, AiFillMinusSquare, AiFillShopping} from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div>
      <h2 className='text-center my-4'>Check Out</h2>
     
      
<form className='px-4 md:px-48'>
<h5 className=' my-4'>1. Delivery Details</h5>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label forhtml="first_name" className="block mb-2 text-sm  text-gray-400 ">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="John" required/>
        </div>
        <div>
            <label forhtml="last_name" className="block mb-2 text-sm  text-gray-400 ">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="Doe" />
        </div>
        <div>
            <label forhtml="email" className="block mb-2 text-sm  text-gray-400 ">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="email@gmail.com" required/>
        </div>  
        <div>
            <label forhtml="phone" className="block mb-2 text-sm  text-gray-400 ">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label forhtml="city" className="block mb-2 text-sm  text-gray-400 ">City</label>
            <input type="url" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="City" required/>
        </div>
        <div>
            <label forhtml="state" className="block mb-2 text-sm  text-gray-400 ">State</label>
            <input type="number" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 " placeholder="State" required/>
        </div>
    </div>
    <div className="mb-6">
        <label forhtml="address" className="block mb-2 text-sm  text-gray-400 ">Address</label>
        <textarea type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" rows='4' placeholder="Enter your address" required/>
    </div> 
    
    {/* 
    <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button> */}
</form>

  
  <div className=" px-4 md:px-48">
  <h5 className='my-4'>2. Review Cart Item(s)</h5>
    {/* //todo cart */}

      <div className=" sidebar p-2 pl-8 border rounded-lg border-red-500 z-10">
             
        <ol className="list-decimal px-4">
          {Object.keys(cart).length == 0 && (
            <div className="m-1 text-center">No Items in Cart.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="hover:text-red-400">
                <div className="item flex my-5">
                  <div className=" font-semibold text-sm">
                    {cart[k].name} ({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3 flex font-semibold text-center justify-center items-center text-lg">
                    <AiFillMinusSquare
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-red-600"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusSquare
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-red-600"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

         <span className='font-bold py-2'>SubTotal: ${subTotal}</span>
         <div className="flex items-start my-4">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required/>
        </div>
        <label forhtml="remember" className="ml-2 text-sm  text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-red-600 hover:underline dark:text-red-500">terms and conditions</a>.</label>
    </div>
        <div className="flex mt-2">
          <Link href={'/checkout'}><button
            // onClick={() => clearCart}
            type="button"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">
            <AiFillShopping className="text-lg mx-1" />
              Pay ${subTotal}
          </button></Link>
          <button
            onClick={() => {clearCart}}
            type="button"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">
           
            Clear Cart
          </button>
        </div>
      </div>
  </div>

    </div>
  )
}

export default Checkout