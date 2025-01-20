import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TeaCard from '../TeaCard';
import Image from 'next/image';

const Tea = () => {
  const teaData = [
    {
      icon: <FavoriteBorderIcon className="text-[#56C7BD] text-5xl" />,
      title: "Powerful Elated Settings",
      description:
        "Take control over your website. All elements can be easily styled and modified in Elated settings easily and intuitively.",
    },
    {
      icon: <RedeemIcon className="text-[#56C7BD] text-5xl" />,
      title: "Drag-and-Drop Builder",
      description:
        "Add sections with the stunning parallax effect to your pages. Make browsing your website an exciting experience.",
    },
    {
      icon: <StarBorderIcon className="text-[#56C7BD] text-5xl" />,
      title: "Welcome to Elated",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes to set up your stunning website.",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row px-6 lg:px-32 py-20 gap-10">
        {/* Left Section: Tea Cards */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          {teaData.map((curr, index) => {
            return (
              <TeaCard
                key={index}
                icon={curr.icon}
                title={curr.title}
                description={curr.description}
              />
            );
          })}
        </div>

        {/* Right Section: Image */}
        <div className="">
          <Image
            src="/assets/images/asset 41.png"
            alt="title"
            width={750}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Tea;
