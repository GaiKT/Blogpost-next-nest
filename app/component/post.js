import React from 'react'
import Avatar from '../image/Avatar.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faComment } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function Post() {
  return (
    <Link href={'/post/1'}>
        <div className='p-5 w-full cursor-pointer border-b border-grey300'>
            <div>
                <div className='absolute right-0 top-0'>
                    <FontAwesomeIcon icon={faStar} width={12}/>
                </div>
                <div className='flex flex-col w-full gap-5 mb-2'>
                    <div className='flex gap-2'>
                        <Image src={Avatar} 
                        width={31}
                        />
                        <span className='text-grey300'>
                            Jassica
                        </span>
                    </div>
                    <p className='bg-[#F3F3F3] w-fit rounded-xl p-2'>
                        History
                    </p>
                </div>
                <div>
                    <h1 className='font-semibold'>
                        The Beginning of the End of the World
                    </h1>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed...
                    </p>
                </div>
                <div className='flex gap-2 items-center mt-2 text-grey300'>
                    <span>
                        <FontAwesomeIcon icon={faComment} width={12} height={12}/>
                    </span>
                    <span className='text-xs'>32 Comments</span>
                </div>
            </div>
        </div>
    </Link>
  )
}
