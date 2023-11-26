import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from "../assets/banner111.png"

const Home = () => {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl min-h-screen h-screen '>
                <Carousel>
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between  my-12 md:my-8 md:px-8 py-12 gap-4 md:gap-14 w-full">
                        <div className='w-[200px]  sm:w-[40%] md:w-2/3 lg:w-1/3 '>
                            <img src={banner1} alt="" className='' />
                        </div>

                        {/* hero text */}
                        <div className=' md:w-3/2 lg:w-1/2  z-[10000]'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutralDGray font-semibold leading-snug md:w-3/4 mb-4'>Lessons and insights <span className='text-brandPrimary leading-snug '>from 8 years</span></h1>
                            <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn_primary'>register</button>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Home