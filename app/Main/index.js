import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className=' bg-[#50C5BC] h-[100vh] flex flex-col justify-center items-center relative text-center overflow-hidden'>
      <div className='text-white w-[300px] sm:w-[400px]  md:w-[600px] z-30 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='font text-[50px] sm:text-[80px] md:text-[120px] '>Fruit Tea</h1>
        <p className=' sm:text-md md:text-xl py-2'>Etiam convallis, felis quis dapibus dictum, libero mauris luctus, non fringilla purus ligula non justo. Non fringilla purus.</p>
        <button className='h-14  w-48 bg-white text-[#50C5BC]'>VIEW FEATURE</button>
      </div>

      <div className='apple_leaf absolute top-5 right-10 z-10'>
        <Image
          src="/assets/images/asset 12.png"
          alt='title'
          width={200}
          height={100}
        />
      </div>

      <div className='apple absolute top-40 right-0 '>
        <Image
          src="/assets/images/asset 11.png"
          alt='title'
          width={400}
          height={100}
        />
      </div>

      <div className='big_leaf absolute left-[-100px] bottom-[-100px]'>
        <Image
          src="/assets/images/asset 6.png"
          alt='title'
          width={630}
          height={100}
        />
      </div>

      <div className='small_leaf absolute left-10 bottom-[-90px]'>
        <Image
          src="/assets/images/asset 7.png"
          alt='title'
          width={300}
          height={100}
        />
      </div>

      <div className='brown_leaf absolute top-10 left-52 z-10'>
        <Image
          src="/assets/images/asset 8.png"
          alt='title'
          width={250}
          height={100}
        />
      </div>

      <div className='bambo absolute top-0 left-10'>
        <Image
          src="/assets/images/asset 4.png"
          alt='title'
          width={250}
          height={100}
        />
      </div>

      <div className='pineapple absolute top-40 left-20'>
        <Image
          src="/assets/images/asset 5.png"
          alt='title'
          width={150}
          height={100}
        />
      </div>

      <div className='cherry absolute top-40 left-10'>
        <Image
          src="/assets/images/asset 17.png"
          alt='title'
          width={50}
          height={100}
        />
      </div>

      <div className='cherry absolute top-40 left-96'>
        <Image
          src="/assets/images/asset 18.png"
          alt='title'
          width={50}
          height={100}
        />
      </div>

      <div className='black_berry absolute bottom-36 left-[500px] '>
        <Image
          src="/assets/images/asset 14.png"
          alt='title'
          width={60}
          height={100}
        />
      </div>

      <div className='black_berry absolute top-32 right-96  '>
        <Image
          src="/assets/images/asset 16.png"
          alt='title'
          width={80}
          height={100}
        />
      </div>

      <div className='black_berry absolute top-20 right-80'>
        <Image
          src="/assets/images/asset 19.png"
          alt='title'
          width={80}
          height={100}
        />
      </div>

      <div className='right_cherry absolute top-[450px] right-[550px]'>
        <Image
          src="/assets/images/asset 13.png"
          alt='title'
          width={60}
          height={100}
        />
      </div>

      <div className='right_cherry absolute top-52 right-80'>
        <Image
          src="/assets/images/asset 15.png"
          alt='title'
          width={60}
          height={100}
        />
      </div>

      <div className='pink_leaf absolute bottom-[-50px] right-80'>
        <Image
          src="/assets/images/asset 9.png"
          alt='title'
          width={300}
          height={100}
        />
      </div>

      <div className='nut absolute bottom-0 right-40'>
        <Image
          src="/assets/images/asset 10.png"
          alt='title'
          width={150}
          height={100}
        />
      </div>

      

    </div>
  )
}

export default index
