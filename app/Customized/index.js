import React from 'react'
import CustomizedCard from '../CustomizedCard/customizedCard'

const Customized = () => {
    const data = [
        {
            image: '/assets/images/asset 29.jpeg',
            title: "Flowering tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 30.jpeg',
            title: "Mock ups",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 31.jpeg',
            title: "Fruit tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 32.jpeg',
            title: "Green tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 33.jpeg',
            title: "Black tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 34.jpeg',
            title: "Herbal tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 35.jpeg',
            title: "Metal box tea",
            amount: "$190.00"
        },
        {
            image: '/assets/images/asset 36.jpeg',
            title: "Blueberry tea",
            amount: "$190.00"
        }
    ]
    return (
        <>
            <div className='text-center pt-24 pb-10'>
                <h1>Easy to Customize</h1>
                <p className='text-gray-600'>The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up <br></br> your website and creating pages full of stunning content.</p>
            </div>
            <div className="flex justify-center my-10 mx-2 flex-wrap gap-10">

                {
                    data.map((curr, index) => {
                        return (


                            <CustomizedCard key={index} image={curr.image} title={curr.title} amount={curr.amount} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Customized
