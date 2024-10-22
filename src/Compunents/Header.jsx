import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button } from "antd";
import { cardContext } from '../Context/CardContext';

export default function Header() {


  const [islogin , setislogin] = useState(false)
      const { CardItem } = useContext(cardContext)
      console.log('CardItem ==>', CardItem.lenght);
  
  return (
    <>
    <div className='p-6 flex justify-evenly bg-wite-300 items-center w-full sm:justify-between sm-text-3xl shadow '>
        <div className=''>
            <Link to={'/'}>
            <div className='flex items-center'>
            <img width={60} height={40} src='https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__' />
            <h1 className='text-3xl font-bold font-Montserrat'>
                Abdul Rehman Store
            </h1>
            </div>
            </Link>
        </div>
        <div className='flex justify-between items-center gap-12'>
           <Link to={"/"}> <h1 className='font-bold font-Poppins cursor-pointer hover:text-green-500 active:text-green-500'>Home</h1></Link>
           <Link to={"/shop"}> <h1 className='font-bold font-Poppins cursor-pointer hover:text-green-500  active:text-green-500'>Shop</h1></Link>
            <h1 className='font-bold font-Poppins'>About</h1>
            <h1 className='font-bold font-Poppins'>Contact</h1>
        </div>
        <div className='flex gap-5 items-center my-2 p-2 '>
          <Link to={'/card'} className='hover:scale-105 transition-all'>
          <Badge count={CardItem.length}>
          <ShoppingCartOutlined className='text-4xl' />
          </Badge>
          </Link>
          {
            islogin ?
            <Avatar /> :
            <div>
              <Link to={'/signIn'}>
              <Button type='primary' className='hover:scale-105 transition-all  font-semibold -'>Log In</Button>
              </Link>
            </div>

          }
        </div> 
    </div>
    </>
  )
}
