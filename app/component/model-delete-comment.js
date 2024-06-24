import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons' 
import axios from 'axios'
import { toast } from 'react-toastify'


export default function ModeldeleteComment({comment , refreshPosts , tabindex}) {
  const deletePost = async(comment_id) => {
    try {
      const result = await axios.delete('http://localhost:5000/comments/deletecomment/' + comment_id)
      console.log(result)
      toast.success(result.data.message)
      refreshPosts()
      document.getElementById(`model_delete_comment_${tabindex}`).close();
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <>  <div className="tooltip" data-tip="Delete this comment">
          <span className="cursor-pointer" onClick={()=>document.getElementById(`model_delete_comment_${tabindex}`).showModal()}>
              <FontAwesomeIcon icon={faXmark} width={16}/>
          </span>
        </div>

        <dialog id={`model_delete_comment_${tabindex}`} className="modal">
        <div className="modal-box text-textcolor text-center">
            <h3 className="font-semibold text-lg">
                Please confirm if you wish to unsend the comment
            </h3>
            <p className="py-4">Are you sure you want to unsend the comment?.</p>
            <div className="modal-action w-full">
                <form method="dialog" className='flex w-1/2 gap-4'>
                    <button className="btn w-full">Close</button>
                </form>
                <button className="btn btn-error w-1/2 text-white" onClick={()=>{deletePost(comment._id)}}>Delete</button>   
            </div>
        </div>
        </dialog>
    </>
  )
}
