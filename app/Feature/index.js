"use client";
import Image from 'next/image';
import React from 'react';
import Feature1 from '../FeatureCard/feature1';
import Feature2 from '../FeatureCard/feature2';

const Features = () => {
  const dataLeft = [
    {
      title: "Stunning Full Screen Slider",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages.",
    },
    {
      title: "Smooth Parallax Effect",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your content.",
    },
    {
      title: "WooCommerce Compatible",
      description:
        "Elated Themes provide a large collection of elements and shortcodes. Create any layout combination you can imagine and.",
    },
  ];

  const dataRight = [
    {
      title: "Simple Demo Import",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality that comes in style.",
    },
    {
      title: "Infographic Elements",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website has never been.",
    },
    {
      title: "Retina Ready",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality display your main",
    },
  ];

  return (
    <div className="main_feature flex flex-col justify-center items-center bg-[#F7F5F2] md:flex-row md:justify-between gap-10 px-4 sm:px-10 lg:px-20 py-10">
      {/* Left Section */}
      <div className="left flex-1 space-y-6">
        {dataLeft.map((curr, index) => (
          <Feature1 key={index} title={curr.title} description={curr.description} />
        ))}
      </div>

      {/* Middle Section */}
      <div className="middle flex justify-center items-center flex-shrink-0">
        <Image
          src="/assets/images/asset 28.png"
          alt="centerImage"
          width={300}
          height={60}
          className="w-[200px] md:w-[300px] lg:w-[450px]"
        />
      </div>

      {/* Right Section */}
      <div className="right flex-1 space-y-6">
        {dataRight.map((curr, index) => (
          <Feature2 key={index} title={curr.title} description={curr.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
