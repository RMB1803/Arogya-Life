import React from 'react'

function About() {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full p-[5vw] bg-[#CDEA68] rounded-tl-xl rounded-tr-xl mb-20"
    >
      <h1 className="font-outfit text-[4.2vw] text-zinc-900 leading-[4.5vw] tracking-tight w-[90%]">
        We propose to centralize medical data, allowing doctors,
        diagnostic labs, research centers, hospitals, etc., to upload
        information. This initiative aims to address the challenges
        mentioned earlier.
      </h1>
      <div className="w-full mt-[4vw] border-t-[1px] border-[#738146] flex pt-[4vw] ">
        <div className="w-1/2 h-[70vh]">
          <h1 className="text-[4vw] text-zinc-900 tracking-tighter">
            Our approach:
          </h1>
          <a href='https://www.canva.com/design/DAGMx8fFfKY/ccIuM0GtpgdQtoiVIk4PzQ/view?utm_content=DAGMx8fFfKY&utm_campaign=designshare&utm_medium=link&utm_source=editor'>
          <button className="mt-[1vw] px-10 py-5 rounded-full bg-black text-white flex justify-between items-center">
            Read More
            <div className="rounded-full bg-white w-[0.7vw] h-[0.7vw] ml-[2vw]"></div>
          </button>
          </a>
          
        </div>
        <div className="w-1/2 h-[70vh] bg-black rounded-3xl overflow-hidden">
          <img
            src='https://imgs.search.brave.com/foZxx-fcNrYYg2FXIPwlrtrwVxsq01cPNs3Gk01WomM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NTU3MjkxNC9waG90/by9kb2N0b3ItbGlz/dGVuaW5nLXRvLXBh/dGllbnRzLWhlYXJ0/LXdpdGgtc3RldGhv/c2NvcGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUhHMFZB/UDgyLVVqNkVEWFVX/ckI2c1J1OGV2UjFT/S1FCRzBXV3doemRu/bEk9'
            alt="agency"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
