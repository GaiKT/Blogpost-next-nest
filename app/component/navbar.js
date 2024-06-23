"use client"

import React from 'react'
import BergerbarIcon from '../image/berger-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/contexts/authcontext' 
import avatar from "../image/Avatar.png"

export default function Navbar() {

  const {state} = useAuth()

  return (
    <>
    {/* is authentication */}
    <nav className='flex w-full justify-between items-center px-8 h-16 bg-green500 text-white max-md:px-4 sticky top-0 z-50'>
        <h1 className='font-castoro italic'>
            a Board
        </h1>

        {
          state?.login ? 
          
          <div className='flex gap-5 items-center max-md:hidden'>
            <p>{state?.firstName}</p>
            <Image src={avatar} width={40} height={40} alt='profile'/>
          </div>

          :         
          
          <div>
            <Link href={'/auth/login'}>
            <button className='py-2 px-4 rounded-md bg-success max-md:hidden'>
                Sign in
            </button>
            <button className='md:hidden'>
              <Image
              src={BergerbarIcon}
              width={18}
              />
            </button>
            </Link>
        </div>
        }
    </nav>
    </>
    
  )
}
