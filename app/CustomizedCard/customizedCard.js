import Image from 'next/image'
import React from 'react'

const CustomizedCard = ({image, title, amount}) => {
  return (
   <>
   

<div className='main_card  '>
   <div className='h-[400px] w-[300px] text-center '>
   <div className=''>
   <Image 
    src={image}
    alt='title'
    width={300}
    height={60}
   />
    </div>
    <div className='pt-4'>
    <h5 className='font-bold title'>{title}</h5>
    <p className='font-medium'>{amount}</p>
    </div>
   </div>

   </div>
   </>
  )
}

export default CustomizedCard
