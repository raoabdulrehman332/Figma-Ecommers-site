import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetail() {
    const { id } = useParams()
    console.log('params id==>', id);

    let [products , setproducts] = useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((data)=> setproducts(data));        
    },[])
    console.log('single product==>', products);
    // console.log('products reviews==>', products.reviews[0]);
    
    
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto border">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded bg-amber-100"
        src={products.thumbnail}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
         {
            products.brand
         }
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
         {
            products.title
         }
        </h1>
        <h1 className="text-gray-400 text-3xl title-font font-medium my-3">
        Rs. <span className='text-3xl text-green-500 font-bold'>$</span>{
            products.price
         }
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center text-3xl">
          <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-6 text-yellow-400"
              viewBox="0 0 10 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 font-bold text-2xl border-gray-400 space-x-2s">
            <span className="text-gray-400 text-3xl ml-3">{Math.round(products.rating)} Customer Reviews</span>   
          </span>
        </div>
        <p className="leading-relaxed">
          {
            products.description
          }
        </p>
        <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex flex-col">
            <h1 className="mr-3 text-xl text-gray-400 ">Color</h1>
            <br/>
           <div className='flex gap-2'>
           <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
           </div>
          </div>

          <div className=" mt-6  flex flex-col gap-0 ">
            <span className="mr-3 text-xl text-gray-400">Size</span>
            <br/>
            <div className='flex gap-2'>
           <button className="py-1 px-2 rounded-lg hover:bg-green-300 border-none outline-none bg-amber-600 text-white text-xl font-semibold">L</button>
           <button className="py-1 px-2 rounded-lg hover:bg-green-300 border-none outline-none bg-amber-600 text-white text-xl font-semibold">XL</button>
           <button className="py-1 px-2 rounded-lg hover:bg-green-300 border-none outline-none bg-amber-600 text-white text-xl font-semibold">Xs</button>
            
           </div>
          </div>
        </div>
        <div className="w-full">
          <Button icon={<PlusOutlined />} iconPosition='start' size='large' styles={"py-3 px-10 border-2  rounded-xl hover:border-green-500 hover:text-green-500  transition-all"}>
            Add to card
          </Button>
          
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
