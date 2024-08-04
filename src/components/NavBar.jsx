import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items'>
      <div className="logo">
        <h1 className='font-playfair font-bold text-4xl'>ArogyaLife</h1>
        </div>
    <div className="Links flex gap-10">
        {["services","Our Work","About Us","Insights","Contact",""].map((item,index) => (
        <a key={index} className={`text-lg capitalize font-light ${index=== 4 && "ml-32" }`}>{item}</a>
        ))}
                
      </div>

    </div>
  )
}

export default Navbar
