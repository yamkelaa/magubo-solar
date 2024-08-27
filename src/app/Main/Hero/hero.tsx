import React from 'react'

const Hero = () => {
  return (
  <section className="relative p-2 text-sm bg-cover bg-top h-[90vh] w-full bg-slate-400 bg-hero-image">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col justify-center h-full gap-5 pl-4">
    <h1 className='text-6xl text-white font-bold'>Pioneers of Solar And <br /> Renewable Energy</h1>
    <p className='text-white w-1/3 text-xs'>
      Magubo Solar is at the forefront of renewable energy, delivering innovative solar solutions that power homes and businesses with efficiency and sustainability. Our mission is to provide reliable, cutting-edge solar technology that helps you reduce energy costs and minimize your environmental impact. Join us in making a positive difference with clean, renewable energy.
    </p>
    <button className='bg-lime-500 text-white p-2 rounded w-[150px]'>Request a Quote</button>
  </div>
</section>
  )
}

export default Hero
