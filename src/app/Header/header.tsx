import React from 'react'
import "./header.css"
const Header = () => {
  return (
   <header className=''>
    <div className="black-bar w-full h-[5px] bg-black mb-1"></div>
    <section className='flex align-middle justify-between text-sm'>
     <h1 className='p-2'>Magubo Solar</h1>
     <nav>
      <ul className='flex align-middle justify-between gap-4'>
        <li className='p-2 hover:text-slate-400'>Home</li>
        <li className='p-2 hover:text-slate-400'>About Us</li>
        <li className='p-2 hover:text-slate-400'>Services</li>
        <li className='p-2 hover:text-slate-400'>News</li>
        <li className='p-2 hover:text-slate-400'>Projects</li>
        <li className='bg-lime-400 text-white p-2 rounded' >Contact Form</li>
      </ul>
     </nav>
     </section>
   </header>
  )
}
export default Header
