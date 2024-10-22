import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard( { item }) {
    // console.log('item==>', item);
    
  return (
    <Link to={`/products/${item.id}`}>
    <div className={'bg-zinc-100 rounded shadow hover:scale-105 hover:border-blue-500 hover:bprde-1xl transition-all'}>
      <img className='w-full h-80' src={item.thumbnail}/>
      <div className='flex flex-col p-5 gap-2 justify-between'>
        <div className='m-3'>
        <h1 className='text-xl font-bold'>{item.title}</h1>
        <h1 className='text-xl text-zinc-400'>{item.category}</h1>
        </div>
        <div className='flex justify-between mt-5'>
         <h1 className='text-2xl font-bold'><span className='text-2xl text-green-500 font-bold'>$</span> {item.price}</h1>
         <h1 className='text-2xl font-mono font-bold text-zinc-300 line-through'>${Math.round(item.price + 5.5) }</h1>
        </div>   
      </div>
    </div>
    </Link>
  )
}
 