import Image from 'next/image'
import React from 'react'

const CompanyLogo = () => {
    return (
        <>
            <div className='h-[230px] bg-[#50C5BB] flex items-center px-10'>
                <div>
                    <Image
                        src="/assets/images/asset 42.png"
                        alt='title'
                        width={300}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/asset 44.png"
                        alt='title'
                        width={300}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/asset 46.png"
                        alt='title'
                        width={300}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/asset 48.png"
                        alt='title'
                        width={300}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/asset 50.png"
                        alt='title'
                        width={300}
                        height={10}
                    />
                </div>
            </div>
        </>
    )
}

export default CompanyLogo
