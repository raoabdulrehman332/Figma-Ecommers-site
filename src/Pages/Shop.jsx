import { RightOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import ProductCardInShop from '../Compunents/ProductCardInShop';

export default function Shop() {

    const [products , setproducts]= useState([])
    const [limit , setlimit]= useState('20')
    const [skip , setskip]= useState('10')
    const [total , settota]= useState('194')

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => setproducts(data.products));
    },[ limit ])

    // console.log('products==>', products);
    
    
  return (
    < >
    <div className=' w-full h-32 relative '>
      <img className='w-full h-[316px] object-cover opacity-35' src='https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQMhw0k4Pb~8vFctwXPdJBMlP0ko5OoXuEQWDgNCyd3z7PUTHRbsjHXAvda1RNGPeL4ZxZNM7eAl~K~pHR7B50ym5aauiU2O9ssFYAooheo8xmEtYuDbxaV0RdTB5C5ZcWzjAnaEomyKTaDSBiVKoRRJaKlZWDzdwOr-fY221Ji6hW0llm5uMRnoN5ajMeAtVj~qwBR0rr5sfyg5TCpA2fJr-HoKY1mTF1DJkaFrBKnaRo9oPMZ50lXInu7aZ6Rufp6mFgV4AW1LTzkmkXBLmO6jtBDLrQyt1hqiI6v~KIcWcH8gQjk0BUIF4L~lzt-iFhD4g0RzAdrSSGJT-sf3dg__' />
      <div className='absolute top-1/2 bottom-1/2  right-1/2 left-1/2 flex flex-col'>
        <h1 className='text-6xl font-bold  object-center '>Shop</h1>
        <div className='flex items-center w-full mt-2 flex-row'>
        <h1 className='text-xl'> Home   </h1>
        <h1 className='text-xl'> <RightOutlined /> </h1>
        <h1 className='text-xl'> Shop </h1>
        </div>
      </div>
    </div>
   
    <div className='container mx-auto m-20 w-[1200px] mt-80'>
        <div className='flex items-center justify-center my-10'> 
    <h1 className='text-5xl font-bold inline'>
      <span className=' text-purple-600'>Our</span> <span className=''>Products</span>
      <img className='w-14 inline' src='https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&amp;px=999' />
    </h1>
    </div>
    <div className=' w-full p-5 bg-slate-500'>
        <div className='flex gap-2'>
            <h1 className='text-2xl font-bold'>
                Limit :
            </h1>
        <input  type='number' className='p-2 w-24 rounded border-none outline-none' value={limit} onChange={(e)=>{setlimit(e.target.value)}} />
        </div>
    </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1  my-10 gap-7'>
            {
                products.map((data)=> <ProductCardInShop key={data.id} item={data} />)
            }
        </div>
    </div>
    
    </>
  )
}
