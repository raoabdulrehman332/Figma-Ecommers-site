

import { DeleteOutlined, MinusOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Image } from 'antd'
import React, { useContext } from 'react'
import { cardContext } from '../Context/CardContext'

export default function Card() {

    const { CardItem , removeItemtoCard ,  isItemAdded ,addquntity} = useContext(cardContext)
console.log('card item ==>', CardItem);


    const TotalAmount = CardItem.reduce((total , obj)=> total + obj.quantity * obj.price , 0)
  const TotalQuantity = CardItem.reduce((total , obj)=> total + obj.quantity  , 0)
  return (
    <>
    <div className=' w-full h-32 relative '>
      <img className='w-full h-[316px] object-cover opacity-35' src='https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQMhw0k4Pb~8vFctwXPdJBMlP0ko5OoXuEQWDgNCyd3z7PUTHRbsjHXAvda1RNGPeL4ZxZNM7eAl~K~pHR7B50ym5aauiU2O9ssFYAooheo8xmEtYuDbxaV0RdTB5C5ZcWzjAnaEomyKTaDSBiVKoRRJaKlZWDzdwOr-fY221Ji6hW0llm5uMRnoN5ajMeAtVj~qwBR0rr5sfyg5TCpA2fJr-HoKY1mTF1DJkaFrBKnaRo9oPMZ50lXInu7aZ6Rufp6mFgV4AW1LTzkmkXBLmO6jtBDLrQyt1hqiI6v~KIcWcH8gQjk0BUIF4L~lzt-iFhD4g0RzAdrSSGJT-sf3dg__' />
      <div className='absolute top-1/2 bottom-1/2  right-1/2 left-1/2 flex flex-col'>
        <h1 className='text-6xl font-bold  object-center '>Card</h1>
        <div className='flex items-center w-full mt-2 flex-row'>
        <h1 className='text-xl'> Home   </h1>
        <h1 className='text-xl'> <RightOutlined /> </h1>
        <h1 className='text-xl'> Card </h1>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    


           <div className='flex gap-10  w-[1500px] mx-auto  border my-10'>
           <div className='flex flex-col w-[1000px] my-5 '>
        <div className='w-full p-2 text-center font-bold  bg-red-100 mx-4 rounded'>Cards</div>
        <div className='w-full mx-4'>

      {
        CardItem.map( data => 
        <div className='flex gap-4 container mx-auto w-[1000px] my-5 h-40 border shadow  items-center rounded py-3  hover:border-blue-300 transition-all'>
          <div className='w-32 flex items-center justify-evenly gap-2'>
          <Image preview={false} width={120} height={120} src={data.thumbnail} className='bg-red-100 rounded flex items-center ml-2' /> 
          </div>
        <div className='flex w-full items-center justify-evenly'>
          <h1 className='text-xl font-semibold'>
            {
                data.title
            }
          </h1>
          <h1 className='text-xl   rounded font-semibold'>
          <Button className='bg-green-500'  onClick={()=>{
            addquntity(data , 'plus')
          }}
          title='Plus Quantity'>
            <PlusOutlined className='font-green-200' />
          </Button> 
          <span className='px-3'>{
                data.quantity
            }</span>
            <Button className='bg-red-500'
          disabled={data.quantity <= 1}
          title={data.quantity <= 1 ? 'If You Want to Item Quantity Less then 1 Please Remove Item' : "Minus Quantity"}
          onClick={()=>{
            addquntity(data , 'minus')
          }} >
            <MinusOutlined />
          </Button>
          </h1>
          <h1 className='text-xl border px-4 py-1 rounded font-semibold'>
          <span className=' font-bold text-green-500'>$</span> {
                data.price
            }
          </h1>
          <h1 className='font-semibold'>
          <Button type='text text-xl' className='' danger
            onClick={()=> removeItemtoCard(data.id)}>
              <DeleteOutlined />
            </Button>
          </h1>
          
          </div>
        </div>)
      }
        </div>
            </div>

            <div className='flex flex-col bg-red-100 my-5 w-[400px] rounded-xl'>
                <h1 className='p-2 text-center text-3xl font-bold w-full'>Card Totals</h1>
                <div className='flex gap-4 w-full items-center justify-center my-5'>
                    <h1 className='text-2xl font-mono'>
                        Total Quantity : 
                    </h1>
                    <h1 className='text-xl text-amber-600'>
                        {TotalQuantity}
                    </h1>
                </div>
                <div className='flex gap-4 w-full items-center justify-center my-5'>
                    <h1 className='text-2xl font-mono'>
                        Total Ammount : 
                    </h1>
                    <h1 className='text-xl text-amber-600'>
                        Rs : <span className=' font-bold text-green-500'>$</span> {Math.round(TotalAmount)}
                    </h1>
                </div>
                <div className='flex w-full justify-center p-4 items-center'>
                <Button   size='large' className='px-20 py-2' styles={"py-3 px-10 border-2  rounded-xl hover:border-green-500 hover:text-green-500  transition-all"}>
            Check Out
          </Button>
                </div>
            </div>
           </div>
      
      
    </>
  )
}
