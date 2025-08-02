import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='my-6'>
        <div className='w-full flex flex-col justify-center align-center gap-4'>
          <Image src="/images/hero.png" alt="Hero" width={500} height={500} className='w-[100%] mx-auto h-[80vh]'/>
          <div className=''>
            <h1 className='text-xl font-bold text-primary mb-2'>Ignite Your Fitness</h1>
            <p className='text-sm text-light'>Transform your body and mind with our expert trainers and state-of-the-art facilities. Join a community dedicated to achieving your fitness goals.</p>
          </div>
        </div>
    </section>
  )
}

export default Hero