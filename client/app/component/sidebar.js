import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="max-md:hidden w-[280px] pt-8">
        <ul className="w-full flex flex-col px-4">
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
        </ul>
    </div>
  )
}
