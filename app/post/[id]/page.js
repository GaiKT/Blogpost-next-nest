"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faStar , faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Avatar from '../../image/Avatar.png'
import UserIcon from '../../image/user-icon.png'
import Link from "next/link";
import { useState , useEffect } from "react";
import {Comment , CommentMobile} from "@/app/component/comment";
import axios from "axios";
import { useAuth } from "@/contexts/authcontext";
import { formatDistanceToNow } from 'date-fns';
import ModeldeleteComment from "@/app/component/model-delete-comment";

export default function Page({params}) {

  const [openComment , setOpenComment] = useState(false)
  const [posts , setPosts] = useState({})
  const {state} = useAuth()
  console.log(state)

  const getPosts = async () => {
    const result = await axios.get(`http://localhost:5000/posts/` + params.id)
    setPosts(result.data)
  }

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <main className="flex flex-col gap-5 bg-white w-full p-6">
        <div className="md:w-5/6">
            {/* go back button */}
            <button className="p-[10px] rounded-full bg-green100 mb-6">
                <Link href={'/'}>
                    <FontAwesomeIcon icon={faArrowLeft} width={24} height={24}/>
                </Link>
            </button>
 
            <div className='p-5 w-full'>
                {/* Post  */}
                <div>
                    <div className='absolute right-0 top-0'>
                        <FontAwesomeIcon icon={faStar} width={12}/>
                    </div>
                    <div className='flex flex-col w-full gap-5 mb-2'>
                        <div className='flex gap-2 items-center'>
                            <div className="relative">
                                <Image src={Avatar} 
                                width={48}
                                alt="profile image"
                                />
                                <div className="w-3 h-3 bg-success border border-white rounded-full absolute right-0 bottom-0">
                                </div>
                            </div>
                            <span className='font-bold'>
                                {posts.user_id?.firstName}
                            </span>
                            <span className="text-grey300">
                                { posts.publishDate ? formatDistanceToNow(new Date(posts.publishDate), { addSuffix: true }) : ''}
                            </span>
                        </div>
                        <p className='bg-[#F3F3F3] w-fit rounded-xl p-1'>
                            {posts.community}
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-7">
                        <h1 className='font-bold text-xl'>
                            {posts.title}
                        </h1>
                        <p>
                            {posts.discription}
                        </p>
                        <div className='flex gap-2 items-center mt-2 text-grey300'>
                            <span>
                                <FontAwesomeIcon icon={faComment} width={12} height={12}/>
                            </span>
                            <span className='text-xs'>{posts.comments?.length} Comments</span>
                        </div>
                    </div>
                    {
                        !openComment &&
                        <div className="tooltip" data-tip={!state.login ? 'Please login for create your comment.' : 'Create your comment'}>
                            <button 
                            disabled={!state.login}
                            onClick={()=>{setOpenComment(true)}}
                            className="px-3 py-4 border border-success text-success font-bold rounded-lg mt-5 max-md:hidden">
                                Add Comments
                            </button>
                        </div>
                    }
                    <CommentMobile post_id={posts._id} user_id={state._id} refreshPosts={getPosts}/>
                    {
                    openComment &&
                    <Comment setOpenComment={setOpenComment} post_id={posts._id} user_id={state._id} refreshPosts={getPosts}/>
                    }
                </div>
                {/* Comments */}
                <div className="mt-6 flex flex-col gap-6">
                    {
                        posts.comments?.map((comment , index)=>{
                            return (
                                <article key={index} className="relative">
                                    <div className='flex gap-2 items-center '>
                                        <div className="w-10 h-10 rounded-full bg-serface p-2">
                                            <Image src={UserIcon} 
                                            width={48}
                                            />
                                        </div>
                                        <span className='font-bold'>
                                            {comment?.user_id?.firstName}
                                        </span>
                                        <span className="text-grey300">
                                            {
                                                formatDistanceToNow(new Date(comment.publishDate), { addSuffix: true })
                                            }
                                        </span>
                                    </div>
                                    <p className="pl-14">
                                        {comment?.comment}
                                    </p>
                                    {
                                        state._id === comment.user_id._id &&
                                        <div className="absolute top-2 right-2 z-50 ">
                                            <ModeldeleteComment comment={comment} tabindex={index} refreshPosts={getPosts}/>
                                        </div>
                                    }
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </main>
  );
}
