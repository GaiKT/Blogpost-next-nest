import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons' 
import axios from 'axios'

export default function Modeldelete({post , refreshPosts}) {
    
  const deletePost = async(post_id) => {
    try {
      const result = await axios.delete('http://localhost:5000/posts/' + post_id)
      alert(result.data.message)
      refreshPosts()
      document.getElementById('model_delete').close();
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <>  <div className="tooltip" data-tip="Delete this post">
          <span className="cursor-pointer" onClick={()=>document.getElementById('model_delete').showModal()}>
              <FontAwesomeIcon icon={faTrash} width={16}/>
          </span>
        </div>

        <dialog id="model_delete" className="modal">
        <div className="modal-box text-textcolor text-center">
            <h3 className="font-semibold text-lg">
                Please confirm if you wish to delete the post
            </h3>
            <p className="py-4">Are you sure you want to delete the post? Once deleted, it cannot be recovered.</p>
            <div className="modal-action w-full">
                <form method="dialog" className='flex w-1/2 gap-4'>
                    <button className="btn w-full">Close</button>
                </form>
                <button className="btn btn-error w-1/2 text-white" onClick={()=>{deletePost(post._id)}}>Delete</button>   
            </div>
        </div>
        </dialog>
    </>
  )
}
