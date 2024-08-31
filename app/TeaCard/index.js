import Image from 'next/image'
import React from 'react'

const TeaCard = ({icon, title, description}) => {
    return (

        <div className="main_tea ">
            <div className="left_content pt-10">
                <div className="content_icon flex gap-3 w-[600px]">
                    <div className="icon pt-1">
                    {icon}
                    </div>
                    <div className="content">
                        <h3 className='text-2xl'>{title}</h3>
                        <p className='text-gray-500'>{description}</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TeaCard
