"use client"

import Sidebar from "@/app/component/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faStar , faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Avatar from '../../image/Avatar.png'
import UserIcon from '../../image/user-icon.png'
import Link from "next/link";
import { useState } from "react";
import Comment from "@/app/component/comment";

export default function Page({params}) {

  const [openComment , setOpenComment] = useState(false)

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar/>
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
                                />
                                <div className="w-3 h-3 bg-success border border-white rounded-full absolute right-0 bottom-0">
                                </div>
                            </div>
                            <span className='font-bold'>
                                Jassica
                            </span>
                            <span className="text-grey300">
                                5mo. ago
                            </span>
                        </div>
                        <p className='bg-[#F3F3F3] w-fit rounded-xl p-1'>
                            History
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-7">
                        <h1 className='font-bold text-xl'>
                            The Beginning of the End of the World
                        </h1>
                        <p>
                            Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”
                        </p>
                        <div className='flex gap-2 items-center mt-2 text-grey300'>
                            <span>
                                <FontAwesomeIcon icon={faComment} width={12} height={12}/>
                            </span>
                            <span className='text-xs'>32 Comments</span>
                        </div>
                    </div>
                    {
                        !openComment &&
                        <button 
                        onClick={()=>{setOpenComment(true)}}
                        className="px-3 py-4 border border-success text-success font-bold rounded-lg mt-5 max-md:hidden">
                            Add Comments
                        </button>
                    }
                        <button 
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                        className="px-3 py-4 border border-success text-success font-bold rounded-lg mt-5 md:hidden">
                            Add Comments
                        </button>
                    {
                    openComment &&
                    <Comment/>
                    }
                    {/* Mobile */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form className="mt-5">
                                <textarea 
                                placeholder="What’s on your mind..."
                                className="w-full border border-grey100 p-2 rounded-md outline-none"
                                rows={4}
                                ></textarea>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="w-24 text-success border border-success rounded-lg py-3">Cancel</button>
                                    </form>
                                    <button className="w-24 text-white bg-success rounded-lg py-3" type="submit">Post</button>
                                </div>
                            </form>
                            <div className="modal-action">
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* Comments */}
                <div className="mt-6 flex flex-col gap-6">
                    <article>
                        <div className='flex gap-2 items-center'>
                            <div className="w-10 h-10 rounded-full bg-serface p-2">
                                <Image src={UserIcon} 
                                width={48}
                                />
                            </div>
                            <span className='font-bold'>
                                Wittawat98
                            </span>
                            <span className="text-grey300">
                                12h. ago
                            </span>
                        </div>
                        <p className="pl-14">
                            Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.
                        </p>
                    </article>
                    <article>
                        <div className='flex gap-2 items-center'>
                            <div className="w-10 h-10 rounded-full bg-serface p-2">
                                <Image src={UserIcon} 
                                width={48}
                                />
                            </div>
                            <span className='font-bold'>
                                Wittawat98
                            </span>
                            <span className="text-grey300">
                                12h. ago
                            </span>
                        </div>
                        <p className="pl-14">
                            Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.
                        </p>
                    </article>
                    <article>
                        <div className='flex gap-2 items-center'>
                            <div className="w-10 h-10 rounded-full bg-serface p-2">
                                <Image src={UserIcon} 
                                width={48}
                                />
                            </div>
                            <span className='font-bold'>
                                Wittawat98
                            </span>
                            <span className="text-grey300">
                                12h. ago
                            </span>
                        </div>
                        <p className="pl-14">
                            Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.
                        </p>
                    </article>
                    <article>
                        <div className='flex gap-2 items-center'>
                            <div className="w-10 h-10 rounded-full bg-serface p-2">
                                <Image src={UserIcon} 
                                width={48}
                                />
                            </div>
                            <span className='font-bold'>
                                Wittawat98
                            </span>
                            <span className="text-grey300">
                                12h. ago
                            </span>
                        </div>
                        <p className="pl-14">
                            Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.
                        </p>
                    </article>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
