import React from 'react';
export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:5xl md:text-6xl lg:7xl font-bold'>The<span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:5xl md:text-6xl lg:7xl font-bold'><span className='text-orange-500'>Food</span>Delivered</h1>

            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
    </div>
    </div>
  )
}

export default Hero
