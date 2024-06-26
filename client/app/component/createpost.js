"use client"

import React, { useState } from 'react'
import DropdownCreatePost from './dropdown-create-post';
import axios from 'axios';
import { useAuth } from '@/contexts/authcontext';
import { toast } from 'react-toastify'

export default function Createpost({id ,refreshPosts}) {

  const [title , setTitle] = useState('')
  const [discription , setDiscription] = useState('')
  const [community , setCommunity] = useState('')
  const {state} = useAuth()
  const [error , setError] = useState()

  const createPost = async () => {
    try {
      const result = await axios.post('http://localhost:5000/posts', {
      title : title ,
      discription : discription ,
      community : community,
      user_id : id
    })
      document.getElementById('create_post_modal').close();
      refreshPosts()
      toast.success(result.data.message)
    } catch (error) {
      toast.error(error)
      handleError(error.response?.data?.errors)
    }
  }

  const handleError = (arrError) => {
    const result = {}
    arrError.map((err)=>{
      return result[err?.field] = err?.message
    })
    setError(result)
  }

  return (
    <>
      <div className="tooltip" data-tip={!state.login ? 'Please login for create your post.' : 'Create Your posts'}>
        <button 
        disabled={!state.login}
        onClick={()=>document.getElementById('create_post_modal').showModal()}
        className="px-4 py-2 bg-success rounded-md min-w-28 text-white">
          Create +
        </button>
      </div>

      <dialog id="create_post_modal" className="modal">
        <div className="modal-box max-md:w-10/12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-col justify-between gap-3">
            <h1 className="font-bold">Create Post</h1>
            <DropdownCreatePost communitySet={setCommunity}/>
            {
              error?.community && <p className='text-error'>{error.community}</p>
            }           
            <input 
            type="text" 
            placeholder="Title" 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className="w-full border border-grayline rounded-lg p-2"/>
            {
              error?.title && <p className='text-error'>{error.title}</p>
            }
            <textarea 
            placeholder="What’s on your mind..."
            onChange={(e)=>{setDiscription(e.target.value)}}
            value={discription}
            className="w-full border border-grayline rounded-lg p-2"
            rows={7}
            />
            {
              error?.discription && <p className='text-error'>{error.discription}</p>
            }
          </div>
          <div className="w-full flex justify-end max-md:flex-col gap-2 mt-3">
            <form method="dialog">
              <button className="w-24 max-md:w-full h-10 text-success border border-success rounded-lg ">Cancel</button>
            </form>
            <button className="w-24 max-md:w-full h-10 text-white bg-success rounded-lg m-0 "
            onClick={createPost}
            >Post</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
