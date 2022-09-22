import React from 'react'
import house from '../assets/house-banner.png'
const Hero = () => {
  return (
    <section className='flex mt-5 max-w-[1040px] mx-auto items-center'>
        <div className='xs:pr-10 lg:pr-0 pl-10'>
            <h1 className='font-bold text-5xl mb-5'><span className='text-purple-800'>Rent</span> Your Dream <br /> House With Us.</h1>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
        </div>
        <img src={house} alt="house" className='w-[45%] xs:hidden lg:block'/>
    </section>
  )
}

export default Hero