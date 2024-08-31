import React from 'react'

const Feature1 = ({title , description}) => {
  return (
   <>
   <div className='flex flex-col gap-10'>

    <div className="feature_1  h-[200px] w-[400px] text-right flex flex-col justify-center ">
        <h1 className='text-2xl font-bold title' >{title}</h1>
        <p className='text-gray-600'>{description}</p>
    </div>
   

    </div>
   </>
  )
}

export default Feature1
