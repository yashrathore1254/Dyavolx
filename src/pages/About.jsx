import React from 'react'
import Footer from '../component/Footer'

const About = () => {
    return (
        <>
            <div className='w-full h-screen bg-[url(/images/backbg.webp)] bg-cover bg-center relative z-[2] text-white'>
                <div className='w-full h-full relative flex items-center justify-center'>
                    <div className=' h-[400px] w-[70%] text-center flex flex-col justify-center gap-[30px]'>
                        <p className='text-2xl leading-[3rem] '>D'YAVOL X is a limited release luxury streetwear brand for those who are authentic, untamed, and defiant</p>
                        <p className='text-xl leading-[3rem] font-light'>Our approach to streetwear fuses disruptive urban aesthetics with the attention to quality and detail of high fashion. We are equally obsessed with both look and feel, creating garments that offer magnetic style and luxurious comfort.</p>
                        <p className='text-xl leading-[3rem] '>We only ever produce limited quantities of each of our designs, and release capsule drops every few months. We retail exclusively through our own webstore.</p>

                    </div>
                </div>
            </div>
            <Footer />

        </>)
}

export default About