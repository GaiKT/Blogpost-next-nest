"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/contexts/authcontext' 
import avatar from "../image/Avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faArrowRight ,faHome , faPenToSquare ,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  const {state , logout} = useAuth()

  return (
    <>
    {/* Desktop */}
    <nav className='flex w-full justify-between items-center px-8 h-16 bg-green500 text-white sticky top-0 z-50 max-md:hidden'>
        <h1 className='font-castoro italic'>
            a Board
        </h1>

        {
          state?.login ? 
          
          <div className='flex gap-5 items-center'>
            <p>{state?.firstName}</p>
            <div className="dropdown dropdown-left">
              <div tabIndex={0} className='cursor-pointer'>
                <Image src={avatar} width={40} height={40} alt='profile'/>
              </div>
              <ul tabIndex={0} className="dropdown-content menu text-golden bg-green100 text-center rounded z-[1] w-52 p-2 shadow">
                <p className='text-black'>{state?.firstName} {state?.lastName}</p>
                <li className='flex justify-center items-center mt-4' onClick={()=>{logout()}}><a>Logout</a></li>
              </ul>
            </div>
          </div>
          

          :         
          
          <div>
            <Link href={'/auth/login'}>
            <button className='py-2 px-4 rounded-md bg-success'>
                Sign in
            </button>
            </Link>
        </div>
        }
    </nav>
    
    {/* Mobile */}
    <nav className='flex w-full justify-between items-center h-16 bg-green500 text-white px-4 sticky top-0 z-50 md:hidden'>
        <h1 className='font-castoro italic'>
            a Board
        </h1>

        {
          state?.login ? 
          <div className="drawer drawer-end w-fit">
          <input id="sidebar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="sidebar" className=" bg-green500 border-none text-white font-bold cursor-pointer"><FontAwesomeIcon icon={faBars} width={40}/></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-80 pt-8 bg-green500 text-white">
              {/* Sidebar content here */}
              <a className='px-8 py-2 text-xl cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight}/>
              </a>
              <li className='h-10 rounded-md py-2 px-3'>
                  <Link href={'/'}>
                      <p className="font-semibold flex gap-2 px-2 items-center">
                          <FontAwesomeIcon icon={faHome} width={24} height={24}/> 
                          Home
                      </p>
                  </Link>
              </li>
              <li className='h-10 rounded-md py-2 px-3'>
                  <Link href={'/post'}>
                      <p className="flex gap-2 px-2 items-center">
                          <FontAwesomeIcon icon={faPenToSquare} width={24} height={24}/> 
                          Our Blog
                      </p>         
                  </Link>
              </li>
              <li className='h-10 rounded-md mt-56' onClick={()=>logout()}>
                <p className="flex gap-2 px-2 items-center justify-center">
                  <FontAwesomeIcon icon={faRightFromBracket} width={24} height={24}/> 
                  Logout
                </p>         
              </li>
            </ul>
          </div>
          </div>
          :
          <div>
            <Link href={'/auth/login'}>
            <button className='py-2 px-4 rounded-md bg-success'>
                Sign in
            </button>
            </Link>
          </div>

        }


    </nav>
    </>
  )
}
