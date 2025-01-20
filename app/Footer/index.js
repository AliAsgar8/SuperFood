import Image from 'next/image'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <div className='footer fixed w-full bottom-0 bg-[#2B2B2B] py-10 px-6 flex-wrap justify-center items-center sm:px-16 md:px-40 flex flex-col md:flex-row md:justify-between gap-10'>
        
        {/* First Section */}
        <div className='first w-full md:w-[330px]'>
          <div>
            <Image
              src="/assets/images/asset 2.png"
              alt='title'
              width={200}
              height={100}
            />
          </div>
          <div className='pt-4'>
            <p className='text-gray-400 text-sm sm:text-base md:text-lg'>
              At vero eos et accusam et justo duo dolo res et ea rebum. Stet clita kasd guber gren. Aenean sollicitudin lorem quis biben dum auci elit clita.
            </p>
            <div className='flex gap-2 items-center pt-4'>
              <HomeIcon />
              <p className='m-0 text-gray-400 text-sm sm:text-base md:text-lg'>+387643932728</p>
            </div>
            <div className='flex gap-2 items-center m-0 pt-4'>
              <PlaceIcon />
              <p className='m-0 text-gray-400 text-sm sm:text-base md:text-lg'>Eighth Avenue 487, New York</p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className='second flex flex-col gap-3 w-full md:w-[330px]'>
          <input
            type="text"
            placeholder='Name'
            className='h-14 w-full md:w-80 border-1 border-[#6f6f6f] bg-[#363636] text-xs sm:text-sm md:text-base ps-10'
          />
          <input
            type="email"
            placeholder='Email'
            className='h-14 w-full md:w-80 text-start border-1 border-[#6f6f6f] bg-[#363636] text-xs sm:text-sm md:text-base ps-10'
          />
          <input
            type="text"
            placeholder='Comment'
            className='h-40 w-full md:w-80 border-1 border-[#6f6f6f] bg-[#363636] text-xs sm:text-sm md:text-base ps-10'
          />
          <button className='h-14 w-full md:w-52 bg-[#00BDBB] text-white text-xs sm:text-sm md:text-base'>SUBMIT</button>
        </div>

        {/* Third Section */}
        <div className='third w-full md:w-[330px]'>
          <h3 className='text-lg sm:text-xl md:text-2xl'>Twitter feed</h3>
          <p className='text-gray-400 text-sm sm:text-base md:text-lg'>Couldn't connect with Twitter</p>
          <div className='flex gap-4 pt-4'>
            <InstagramIcon className='text-gray-400 text-2xl sm:text-3xl md:text-4xl' />
            <TwitterIcon className='text-gray-400 text-2xl sm:text-3xl md:text-4xl' />
            <FacebookIcon className='text-gray-400 text-2xl sm:text-3xl md:text-4xl' />
            <LinkedInIcon className='text-gray-400 text-2xl sm:text-3xl md:text-4xl' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer;
