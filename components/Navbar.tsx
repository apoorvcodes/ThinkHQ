import React from 'react'
import { useState, useEffect } from 'react'
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(()=> {
     window.addEventListener("resize", ()=>{
         if(window.innerWidth > 768) {
             setIsMobile(false)
             return
         }
         setIsMobile(true)
     })
    }, [])
  return (
    <div className='flex pt-6 pl-24 pr-24 pb-6 justify-between items-center'>
        <div className='flex flex-row space-x-4 justify-center items-center'>

        <div className='font-bold text-3xl p-2 text-white bg-purple-600 rounded-md'>
            HQ
        </div>
        <div className='font-bold text-4xl  text-purple-600'>
            ReThink
        </div>
        
        </div>
        <div className='flex flex-row space-x-4 items-center'>
        {isMobile ? <div>YES</div> : <div>no</div>}
            <div className='text-xl font-bold '>GITHUB</div>
            <div className='text-xl font-bold text-white bg-purple-600 p-2 '>GET STARTED  </div>
            </div>
    </div>
  )
}

export default Navbar