import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TeaCard from '../TeaCard';
import Image from 'next/image';

const Tea = () => {
    const teaData = [
        {
            icon:<FavoriteBorderIcon className='text-[#56C7BD] size-10' />,
            title:"Powerful Elated Settings",
            description:"Take control over your website. All elements can be easily styled and modified in Elated settings easily and intuitively."
        },
        {
            icon:<RedeemIcon className='text-[#56C7BD] size-10'/>,
            title:"Drag-and-Drop Builder",
            description:"Add sections with the stunning parallax effect to your pages. Make browsing your website an exciting experience."
        },
        {
            icon:<StarBorderIcon className='text-[#56C7BD] size-10'/>,
            title:"Welcome to Elated",
            description:"The Visual Composer drag-and-drop page builder is packed with all Elated Themes to set up your stunning website."
        },

    ]
    return (
        <>
        <div className='flex relative px-32 py-20'>
        <div>
        {
          teaData.map((curr, index) => {
            return(
            <TeaCard  key={index} icon={curr.icon} title={curr.title} description={curr.description}/>
            )
          })
        }
        </div>
        <div className="right_content absolute top-[-100px] right-0">
                <Image 
                src="/assets/images/asset 41.png"
                alt='title'
                width={750}
                height={100}
                />
            </div>
        </div>
        </>
    )
}

export default Tea
