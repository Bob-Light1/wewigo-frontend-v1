import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'
import { social } from '../assets/assets'
import { background } from '../assets/assets'
import Trusted from '@/components/Trusted'

const socialImages = Object.values(social).map(img => img.default || img);
const backgoundImages = Object.values(background).map(img => img.default || img);

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>

     <div className='w-full fixed z-50 bg-white/30 backdrop-blur-md'>
        <img src={assets.logo} alt=""  className='h-24 object-contain ml-30'/>
      </div>

      <div className='h-screen flex flex-col lg:flex-row overflow-y-scroll xl:overflow-hidden'>
        {/*Background Image*/}
        <img 
          src={backgoundImages[10]} 
          alt='' 
          className='w-full h-full absolute top-0 left-0 -z-1 object-contain rounded-full'
        />

        {/* left side : Branding */}
        <div className='flex-1 flex flex-col items-center justify-center p-6 md:p-10 lg:pl-40 lg:pb-30 lg:items-end mt-20'>
        
          <div className='h-70 backdrop-blur-md bg-gradient-to-r from-white/60 to-white/80 md:h-100 lg:h-95 xl:h-
          border-b-2 border-b-[#4989c8] p-2 rounded-xl'>
            <div className='flex flex-wrap items-center justify-center xl:justify-start gap-3 mb-4 max-md:mt-10 rounded-xl'>
              <img src={socialImages[1]} alt="" className='h-16 md:h-30 lg:h-40 rounded-full'/>
              <div className='bg-gradient-to-r from-white/10 to-white/80 p-2 rounded-xl'>
                <div className='flex'>
                  {Array(5).fill(0).map((_, i) => (<Star key={i} 
                  className='size-4 md:size-4.5 text-transparent fill-[#ff7f3e]'/>))}
                </div>
                <p className='text-black font-semibold'> Save your money!</p>
              </div>
            </div>

            <div className='h-35 flex flex-col p-4'>
              <h1 className='text-3xl xl:text-6xl xl:text-left md:pb-2 md:text-center font-bold bg-[#4989c8] bg-clip-text text-transparent'>
                Prepare Your Trip !
              </h1>
              <p className='text-lg lg:text-2xl xl:text-left md:max-w-lg md:text-center text-black max-w-72   mb-30'>
                Find Young travelers !
              </p>
            </div>
  
          </div>
        </div>

        {/*Right side: Login Form*/}
        <div className='flex-1 flex items-center justify-center sm:p-16 lg:justify-start'>
            <SignIn />
        </div>

      </div> 
        
    </div>
  )
}

export default Login
