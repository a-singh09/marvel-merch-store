import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  // const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })

    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }

    }
    catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      // setKey(Math.random())
    }

  }, [])

  const router = useRouter()

  const saveCart = (myCart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cart", JSON.stringify(myCart))

      let subt = 0
      let keys = Object.keys(myCart)
      for (let i = 0; i < keys.length; i++) {
        subt += myCart[keys[i]].qty * myCart[keys[i]].price
      }
      setSubTotal(subt)
    }
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    localStorage.removeItem("cart")
    setCart({})
    saveCart({})
  }

  const buyNow = (itemCode, qty, price, name, size, variant) => {

    let newCart = { itemCode: { qty, price, name, size, variant } };

    setCart(newCart)
    saveCart(newCart)
    router.push('http://localhost:3000/checkout')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    // setKey(Math.random())
    router.push('/')
  }


  return <>
    <LoadingBar color='#EF4444' height={3} progress={progress} onLoaderFinished={() => setProgress(0)} waitingTime={500} />
    <Navbar user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    {/* {!key && <Navbar user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}     */}
    <Component {...pageProps} logout={logout} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} buyNow={buyNow} />
    <Footer cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  </>
}
