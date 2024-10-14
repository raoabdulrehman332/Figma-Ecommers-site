import React from 'react'
import { Link } from 'react-router-dom'
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <>
    <div className='p-6 flex justify-evenly bg-wite-300 items-center w-full sm:justify-between sm-text-3xl shadow '>
        <div className=''>
            <div className='flex items-center'>
            <img width={60} height={40} src='https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__' />
            <h1 className='text-3xl font-bold font-Montserrat'>
                Abdul Rehman Store
            </h1>
            </div>
        </div>
        <div className='flex justify-between items-center gap-12'>
           <Link to={"/"}> <h1 className='font-bold font-Poppins cursor-pointer hover:text-green-500'>Home</h1></Link>
           <Link to={"/shop"}> <h1 className='font-bold font-Poppins cursor-pointer hover:text-green-500'>Shop</h1></Link>
            <h1 className='font-bold font-Poppins'>About</h1>
            <h1 className='font-bold font-Poppins'>Contact</h1>
        </div>
        <div className='flex justify-evenly gap-5'>
        <SearchOutlined className='text-2xl font-normal'  />
        <HeartOutlined className='text-2xl font-normal'/>
        <ShoppingCartOutlined className='text-2xl font-normal'/>
        </div> 
    </div>
    </>
  )
}
