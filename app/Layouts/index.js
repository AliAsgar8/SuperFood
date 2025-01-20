import Image from 'next/image';
import React from 'react'

const Layouts = () => {
  return (
   <>
   <div className='layout text-center flex justify-center items-center py-28 '>
    <div className='w-[800px] '>
        <h1 className='font-semibold text-md sm:text-[40px] pb-2'>Beautiful Blog Layouts</h1>
        <p className='text-gray-600 py-3 px-3 '>The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your essential content in style. Add sections with the stunning parallax effect to your pages. Make browsing your website an exciting and intuitive experience.</p>
        <button className='border-2  py-3 rounded-lg w-44 bg-[#00BDBB] text-white text-sm'>VIEW FEATURE</button>
    </div>
    </div>
   </>
  )
}

export default Layouts;
