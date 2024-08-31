"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useState} from 'react'
import Feature1 from '../FeatureCard/feature1';
import Feature2 from '../FeatureCard/feature2'

const Features = () => {
    // const [animations, setAnimations] = useState(0);

    // useEffect(() => {

    //     const handleScrollBar = () => {
    //         const scrollPage = window.pageYOffset;
    //         const bgHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrollPercentage = scrollPage / bgHeight;

    //         const newPercentage = scrollPercentage * 360;
    //         setAnimations(newPercentage);
    //     }
    //     window.addEventListener("scroll", handleScrollBar);

    // }, [])

    const dataLeft = [{
        title: "Stunning Full Screen Slider",
        description: "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages."
    },
    {
        title: "Smooth Parallax Effect",
        description: "The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your content."
    },
    {
        title: "WooCommerce Compatible",
        description: "Elated Themes provide a large collection of elements and shortcodes. Create any layout combination you can imagine and."
    }
    ];

    const dataRight = [{
        title: "Simple Demo Import",
        description: "The Elated Slider comes with video and image support, as well as full screen and parallax functionality that comes in style."
    },
    {
        title: "Infographic Elements",
        description: "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website has never been."
    },
    {
        title: "Retina Ready",
        description: "The Elated Slider comes with video and image support, as well as full screen and parallax functionality display your main"
    }
    ];
    return (
        <div className='main_feature h-[650px] flex justify-between px-[90px] py-[60px] bg-[#F7F5F2]'>

            <div className="left">
                {
                    dataLeft.map((curr, index) => {
                        return (

                            <Feature1 key={index} title={curr.title} description={curr.description} />
                        )

                    })
                }
            </div>
            <div className="middle  flex justify-center">
                <Image
                    src='/assets/images/asset 28.png'
                    alt='centerImage'
                    width={450}
                    height={60}
                    // style={{transform: `translateX(${animations}%)`}}
                />
            </div>
            <div className="right">
                {
                    dataRight.map((curr, index) => {
                        return (
                            <Feature2 key={index} title={curr.title} description={curr.description} />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Features