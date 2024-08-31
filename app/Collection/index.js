import Image from 'next/image'
import React from 'react'

const Collection = () => {
  return (
   <>
    <div className='collection h-[400px] flex justify-center items-center gap-40'>
    <div className='text-white flex flex-col justify-center items-center'>
       <div>
        <Image 
          src='/assets/images/asset 37.png'
          alt='title'
          width={100}
          height={100}
        />
       </div>
       <h4>9859</h4>
       <h4>Icon Collections</h4>
       </div>

       <div className='text-white flex flex-col justify-center items-center'>
       <div>
       <Image 
          src='/assets/images/asset 38.png'
          alt='title'
          width={100}
          height={100}
        />
       </div>
       <h4 >8197</h4>
       <h4>Masonry Layouts</h4>
       </div>

       <div className='text-white flex flex-col justify-center items-center'>
       <div>
       <Image 
          src='/assets/images/asset 39.png'
          alt='title'
          width={100}
          height={100}
        />
       </div>
       <h4>1143</h4>
       <h4>Only The Best</h4>
       </div>

       <div className='text-white flex flex-col justify-center items-center'>
       <div>
       <Image 
          src='/assets/images/asset 40.png'
          alt='title'
          width={100}
          height={100}
        />
       </div>
       <h4>2177</h4>
       <h4>Elated Design</h4>
       </div>
    </div>
   </>
  )
}

export default Collection
