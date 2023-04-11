import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'
import mongoose from 'mongoose'

const Tshirts = ({products}) => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {products.map((item) => {
            return (
              <div key = {item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link passHref={true} href={'/products/' + item.slug} className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-white title-font text-lg font-medium">{item.name}</h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
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
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({category: 'tshirts'})

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}

export default Tshirts