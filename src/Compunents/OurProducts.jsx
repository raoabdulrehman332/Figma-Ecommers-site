import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function OurProducts() {
    const [Products ,setPrducts] = useState([])
    const [loding ,setloding] = useState(false)
   
    useEffect(()=>{
        setloding(true)
        fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(res => setPrducts(res.products));  
          setloding(false)        
    },[])
    console.log('Products===>', Products);
    
    let arr =[1,2,3,4]
  return (
    <div className='container mx-auto m-20 w-[1200px] my-10'>
        <div className='flex items-center justify-center my-10'> 
    <h1 className='text-5xl font-bold inline'>
      <span className=' text-purple-600'>Our</span> <span className=''>Products</span>
      <img className='w-14 inline' src='https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&amp;px=999' />
    </h1>
    </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1  my-10 gap-7'>
            {
                Products.map((data)=> <ProductCard key={data.id} item={data} />)
            }
        </div>
    </div>
  )
}
