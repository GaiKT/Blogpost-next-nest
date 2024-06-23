import React from 'react'
import Avatar from '../image/Avatar.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faComment } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function Post({post , user}) {
  return (
    
        <div className='p-5 w-full border-b border-grey300 relative'>
            <div>
                {/* <div className='absolute right-3 top-2'>
                    <FontAwesomeIcon icon={faStar} width={12}/>
                </div> */}
                <div className='flex flex-col w-full gap-5 mb-2'>
                    <div className='flex gap-2'>
                        <Image src={Avatar}
                        alt='avtar' 
                        width={31}
                        />
                        <span className='text-grey300'>
                            {user.firstName}
                        </span>
                    </div>
                    <p className='bg-[#F3F3F3] w-fit rounded-xl p-2'>
                        {post.community}
                    </p>
                </div>
                <div>
                    <Link href={'/post/' + post._id}>
                        <h1 className='font-semibold cursor-pointer'>
                            {post.title}
                        </h1>
                    </Link>
                    <p className='text-xs'>
                        {post.discription}
                    </p>
                </div>
                <div className='flex gap-2 items-center mt-2 text-grey300'>
                    <span>
                        <FontAwesomeIcon icon={faComment} width={12} height={12}/>
                    </span>
                    <span className='text-xs'>{post.comments?.length} Comments</span>
                </div>
            </div>
        </div>
    
  )
}
