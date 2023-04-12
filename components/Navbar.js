import Link from 'next/link'
import React, { useRef } from "react";
import {
  AiFillCloseCircle,
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillShopping,
} from "react-icons/ai";

const Navbar = ({ user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            <span className="ml-3 text-xl">Tailblocks</span>

          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"} className="mr-5 hover:text-white">T-shirts</Link>
            <Link href={"/hoodies"} className="mr-5 hover:text-white">Hoodies</Link>
            <Link href={"/mugs"} className="mr-5 hover:text-white">Mugs</Link>
            <Link href={"/"} className="mr-5 hover:text-white">Fourth Link</Link>
          </nav>

          <button onClick={toggleCart} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">My Cart</button>
          {user.value && <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-3">My Account</button>}
          {!user.value && <Link href={"/login"}>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-3">Login</button></Link>}
        </div>
      </header>

      <div
        ref={ref}
        className={`h-screen sidebar absolute overflow-y-scroll right-0 top-0 p-10 bg-gray-800 z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 transform transition-transform ${Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0'} z-10`}>
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2  cursor-pointer text-red-600 text-2xl">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="m-1 text-center">No Items in Cart.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="hover:text-red-400">
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold text-sm">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
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
        <div className="flex mt-5">
          <Link href={'/checkout'}><button
            // onClick={() => clearCart}
            type="button"
            className="text-white bg-gray-8000 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">
            <AiFillShopping className="text-lg mx-1" />
            Proceed
          </button></Link>
          <button
            onClick={clearCart}
            type="button"
            className="text-white bg-gray-8000 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">

            Clear Cart
          </button>
        </div>
      </div>

    </>
  )
}

export default Navbar