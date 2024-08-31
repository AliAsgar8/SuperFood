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
      <div className='footer  text-white flex py-40 px-40 gap-20'>
        <div className='first w-[330px]'>
          <div>
            <Image
              src="/assets/images/asset 2.png"
              alt='title'
              width={200}
              height={100}
            />
          </div>
          <div className='pt-4'>
            <p className='text-gray-400'>At vero eos et accusam et justo duo dolo res et ea rebum. Stet clita kasd guber gren. Aenean sollici tudin lorem quis biben dum auci elit clita.</p>
            <div className='flex gap-2 items-center pt-4'>
              <HomeIcon />
              <p className='m-0 text-gray-400'>+387643932728</p>
            </div>
            <div className='flex gap-2 items-center m-0 pt-4'>
              <PlaceIcon />
              <p className='m-0 text-gray-400'>Eighth Avenue 487, New York</p>
            </div>
          </div>
        </div>


        <div className='second flex flex-col gap-3'>
          <div className=''>
            <input type="text" placeholder='Name' className='h-14 w-80 border-1 border-[#6f6f6f] bg-[#363636] text-xs ps-10' />
          </div>
          <input type="email" placeholder='Email' className='h-14 w-80 text-start border-1 border-[#6f6f6f] bg-[#363636] text-xs ps-10' />
          <input type="text" placeholder='Comment' className='h-40 w-80 border-1 border-[#6f6f6f] bg-[#363636] text-xs ps-10' />
          <button className='h-14 w-52 bg-[#00BDBB] text-white'>SUBMIT</button>
        </div>


        <div className='third'>
          <h3>Twitter feed</h3>
          <p className='text-gray-400'>Couldn't connect with Twitter</p>
          <InstagramIcon className='text-gray-400' />
          <TwitterIcon className='text-gray-400' />
          <FacebookIcon className='text-gray-400' />
          <LinkedInIcon className='text-gray-400' />
        </div>
      </div>
{/* 
      <div className='bg-[#2B2B2B] h-20 flex justify-center items-center text-center'>
        <div>
          <p className='text-gray-400'>@2017 Qode Interactive, All Rights Reserved</p>
        </div>
      </div> */}
    </>
  )
}

export default Footer
