"use client"

import React, { useState } from 'react'
import DropdownCreatePost from './dropdown-create-post';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default function EditPosts({postData , tabIndex}) {
  const [title , setTitle] = useState(postData.title)
  const [discription , setDiscription] = useState(postData.discription)
  const [community , setCommunity] = useState(postData.community)

  const EditPost = async () => {
    try {
      const result = await axios.patch('http://localhost:5000/posts/' + postData._id, {
      title : title ,
      discription : discription ,
      community : community,
    })
      alert(result.data.message)
      window.location.reload()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className="tooltip" data-tip="Edit this post">
        <span className="cursor-pointer"
        onClick={()=>document.getElementById(`edit_post_modal_${tabIndex}`).showModal()}> 
          <FontAwesomeIcon icon={faPenToSquare} width={16}/>
        </span>
      </div>

      <dialog id={`edit_post_modal_${tabIndex}`} className="modal">
        <div className="modal-box max-md:w-10/12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-col justify-between gap-3">
            <h1 className="font-bold">Edit Post</h1>
            <DropdownCreatePost communitySet={setCommunity} commu={postData.community}/>
            <input 
            type="text" 
            placeholder="Title" 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className="w-full border border-grayline rounded-lg p-2"/>
            <textarea 
            placeholder="What’s on your mind..."
            onChange={(e)=>{setDiscription(e.target.value)}}
            value={discription}
            className="w-full border border-grayline rounded-lg p-2"
            rows={7}
            />
          </div>
          <div className="w-full flex justify-end max-md:flex-col gap-2 mt-3">
            <form method="dialog">
              <button className="w-24 max-md:w-full h-10 text-success border border-success rounded-lg ">Cancel</button>
            </form>
            <button className="w-24 max-md:w-full h-10 text-white bg-success rounded-lg m-0 "
            onClick={EditPost}
            >Confirm</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
