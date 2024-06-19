import React from 'react'
import BergerbarIcon from '../image/berger-icon.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

  return (
    <nav className='flex w-full justify-between items-center px-8 h-16 bg-green500 text-white max-md:px-4 sticky top-0 z-50'>
        <h1 className='font-castoro italic'>
            a Board
        </h1>
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
    </nav>
  )
}
