import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'
import mongoose from 'mongoose'

const Mugs = ({ products }) => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return (
                <div key={products[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link passHref={true} href={'/products/' + products[item].slug} className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={products[item].image} />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">{products[item].name}</h2>
                    <p className="mt-1">{products[item].price}</p>
                    <div className="mt-1">
                      {products[item].size.includes('S') && <span className='border border-gray-200 px-1 mx-1' >S</span>}
                      {products[item].size.includes('M') && <span className='border border-gray-200 px-1 mx-1'>M</span>}
                      {products[item].size.includes('L') && <span className='border border-gray-200 px-1 mx-1' >L </span>}
                      {products[item].size.includes('XL') && <span className='border border-gray-200 px-1 mx-1' >XL</span>}
                      {products[item].size.includes('XXL') && <span className='border border-gray-200 px-1 mx-1'> XXL</span>}
                    </div>
                    <p className="mt-1 text-gray-600 text-sm space-x-1">
                        {products[item].color.includes("red") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-red-700 hover:bg-red-600 w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].color.includes("blue") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-blue-700 hover:bg-blue-600 w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].color.includes("black") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("white") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("pink") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-pink-700 hover:bg-pink-600 w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-green-700 hover:bg-green-600 w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("yellow") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-yellow-700 hover:bg-yellow-600 w-6 h-6 focus:outline-none"></button>
                        )}
                      </p>

                  </div>
                </div >
              )
            })}
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={'/products/wear-the-code'} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1625647770_7125040.jpg?format=webp&w=480&dpr=2.0" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div> */}
          </div >
        </div >
      </section >
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: 'mugs' })
  let mugs ={}

  for (let item of products) {
    if (item.title in mugs) {
      if (!mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color)
      }
      if (!mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size)
      }
    }

    else {
      mugs[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color]
        mugs[item.title].size = [item.size]
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) },
  }
}

export default Mugs