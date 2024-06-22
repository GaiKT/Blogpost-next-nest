"use client"
import React from 'react'
import axios from 'axios'
import { useState} from 'react'

export default function Comment({post_id , user_id , setOpenComment}) {
  const [comment,setComment] = useState('') 

  const addComment = async () => {
    try {
      const result = await axios.post('http://localhost:5000/posts/comment/' + post_id , {
        comment : comment ,
        user_id : user_id
      })
      alert('added comment complete')    
    } catch (error) {
      alert(error)   
    }
  }



  return (
    <>
        {/* Desktop */}
        <div className="mt-5 max-md:hidden">
            <textarea 
            placeholder="What’s on your mind..."
            className="w-full border border-grey100 p-2 rounded-md"
            rows={4}
            onChange={(e)=>setComment(e.target.value)}
            value={comment}
            ></textarea>
            <div className="w-full flex justify-end gap-3 mt-2">
                <button onClick={()=>{setOpenComment(false)}} className="w-24 text-success border border-success rounded-lg py-3">Cancel</button>
                <button className="w-24 text-white bg-success rounded-lg py-3" onClick={addComment}>Post</button>
            </div>
        </div>

        {/* Mobile */}

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                  <div className="mt-5">
                    <textarea 
                      placeholder="What’s on your mind..."
                      className="w-full border border-grey100 p-2 rounded-md outline-none"
                      onChange={(e)=>setComment(e.target.value)}
                      value={comment}
                      rows={4}></textarea>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="w-24 text-success border border-success rounded-lg py-3">Cancel</button>
                          </form>
                            <button className="w-24 text-white bg-success rounded-lg py-3" onClick={addComment} >Post</button>
                        </div>
                  </div>
                <div className="modal-action">
              </div>
            </div>
        </dialog>        
    </>
  )
}
