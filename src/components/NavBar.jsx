import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items'>
      <div className="logo">
        <h1 className='font-playfair font-bold text-4xl'>ArogyaLife</h1>
        </div>
    <div className="Links flex gap-10">
        
        
<div className="flex relative ">
    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
    <a href="https://main--rmb546855.netlify.app/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
    </a>

    </span>
    <input type="text" id="email-with-icon" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Patient's Health ID"/>
    </div>

                
      </div>

    </div>
  )
}

export default Navbar
