import React, { useEffect } from 'react'
import deal from '../assets/deal-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {


  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }, [])
  return (
    <div className='w-full lg:px-20 py-[80px]'>
      <div data-aos="zoom-in" data-aos-delay="100" className='w-full h-[300px] bg-cover bg-center rounded-lg flex flex-col justify-center items-center gap-3 p-4' style = {{backgroundImage:`url(${deal})`}}>
        <h1 className='text-themeyellow text-xl font-semibold'>Everyday Shopping</h1>
        <h1 className='text-white text-[42px] font-bold leading-[50px] text-center'>Deal of the Day</h1>
      </div>
    </div>
  )
}

export default Banner