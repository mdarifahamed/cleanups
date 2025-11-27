import React from 'react'
import faceicons from "../assets/icons/face-icons.png"
import lasteone from "../assets/home/latest-pic1.png"
import lastethree from "../assets/home/latest-pic3.png"
import flowerspic from "../assets/home/folwers-pic.png"

import lastedtwo  from "../assets/home/latest-pic2.png"

function Blog() {
  return (
    <>
      <div className='mt-20 '>
        <div className=' pt-4 px-4 flex gap-3 justify-center text-center mx-auto' >
          <img className='w-[30px] h-[30px]' src={faceicons} alt="faceicons" />
           <p>News & Insights</p>
        </div>

        <div className='px-4 mt-2 text-center '>
          <p className='text-[85px] font-normal'>Blog</p>
          <p className='uppercase font-extralight'>Stay tuned for helpful guides and <br /> inspiring content.</p>
        </div>

        <div className=' mt-8 pt-5  px-5  grid grid-cols-2 '>
          <p className='text-[50px] px-10'>Latest Posts</p>
          <div className='text-center'>
            <p className='[text-14px] uppercase font-extralight'>Our recent articles</p>
            <p className='text-[18px] font-light'>Simplify your tasks and maintaining the cleanliness.</p>
          </div>
        </div>


        <div className='px-10 grid grid-cols-2 gap-5 mt-5'>
          <img className='w-[100%] h-[400px] rounded-3xl' src={lasteone} alt="lastetone" />
          <img className='w-[100%] h-[400px] rounded-3xl' src={lastethree} alt="lastetone" />
        </div>

        <div className='px-12 grid grid-cols-2 gap-5'>
          <p className='text-[42px] font-normal'>Guide to Keeping Your Home Spotless</p>
          <p className='text-[42px] font-normal'>Effective Daily Cleaning Routines</p>
        </div>

        <div className='px-10 grid grid-cols-2 gap-4 mt-5'>
          <img className='w-[100%] h-[400px] rounded-3xl' src={lastedtwo } alt="lastedtwo" />
          <img className='w-[100%] h-[400px] rounded-3xl' src={flowerspic} alt="flowerspic" />

        </div>

         <div className='px-12 grid grid-cols-2 gap-5'>
          <p className='text-[42px] font-normal'>Keep Your Office Clean For Productivity</p>
          <p className='text-[42px] font-normal'>Tips for a Healthier Home</p>
        </div>




      </div>
    </>
  )
}

export default Blog
