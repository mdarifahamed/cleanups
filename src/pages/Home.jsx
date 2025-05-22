import React from 'react';
import cleanup from "../assets/home/cleanup.png";

function Home() {
  return (
    <>
      <div className='container px-20 mt-2'>
        

        
        <div className="relative">
          <img className='w-full rounded-3xl' src={cleanup} alt="cleanup" />

          
          <div className='absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100  opacity-1 p-6 rounded-2xl  w-[45%] shadow-lg'>
            <p className='text-lg font-semibold'>go-to Cleaners</p>
            <p className='text-[55px] text-gray-500'> Expert <br /> <span class='italics'>Cleaning</span> </p>
            <p className='text-sm mt-2'>
              Creating cleaner, healthier spaces so you can focus on what matters most and relax on the weekends.
            </p>

            <button className='mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
              Explore
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

