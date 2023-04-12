import React, {useEffect} from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router'

const Login = () => {

  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }

    let res = await fetch(`http://localhost:3000/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)


    setEmail('')
    setPassword('')

    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success('You have successfully Logged In!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        router.push('/')
      }, 1500);
    }
    else {
      toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={5}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">Sign In</h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-400">Email ID</label>
              <input value={email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">Password</label>
              <input value={password} onChange={handleChange} type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={handleSubmit} className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Sign In</button>
            <Link href={'/signup'} className="text-xs mt-3 hover:text-red-500">New User? Create an account</Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login