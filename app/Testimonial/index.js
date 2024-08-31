"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='testimonial'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='flex justify-center items-center h-[700px]  '>
                        <div className='w-[800px]  text-center'>
                            <h1 className='font-medium'>Choose Your Profile</h1>
                            <p className='text-gray-600 py-4'>The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your essential content in style. Add sections with the stunning parallax effect to your pages and make browsing exciting.</p>
                            <h6 className='font-bold'>Calvin Stuckey Manager.</h6>
                        </div>
                    </div>

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='flex justify-center items-center h-[700px]  '>
                        <div className='w-[800px]  text-center'>
                            <h1 className='font-medium'>Choose Your Profile</h1>
                            <p className='text-gray-600 py-4'>The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your essential content in style. Add sections with the stunning parallax effect to your pages and make browsing exciting.</p>
                            <h6 className='font-bold'>Calvin Stuckey Manager.</h6>
                        </div>
                    </div>

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='flex justify-center items-center h-[700px]   '>
                        <div className='w-[800px]  text-center'>
                            <h1 className='font-medium'>Choose Your Profile</h1>
                            <p className='text-gray-600 py-4'>The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your essential content in style. Add sections with the stunning parallax effect to your pages and make browsing exciting.</p>
                            <h6 className='font-bold'>Calvin Stuckey Manager.</h6>
                        </div>
                    </div>

                    <Carousel.Caption>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default ControlledCarousel;