import Image from 'next/image'
import React from 'react'

const SliderImage = () => {
  return (
    <>
    <div className='flex'>
        <div>
            <Image 
                src="/assets/images/asset 52.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        <div>
            <Image 
                src="/assets/images/asset 53.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        <div>
            <Image 
                src="/assets/images/asset 54.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        <div>
            <Image 
                src="/assets/images/asset 55.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        <div>
            <Image 
                src="/assets/images/asset 56.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        <div>
            <Image 
                src="/assets/images/asset 57.jpeg"
                alt='title'
                width={255}
                height={100} />
        </div>
        </div>
    </>
  )
}

export default SliderImage
