import React from 'react'

export default function Comment() {
  return (
    <>
        {/* Desktop */}
        <form className="mt-5 max-md:hidden">
            <textarea 
            placeholder="What’s on your mind..."
            className="w-full border border-grey100 p-2 rounded-md"
            rows={4}
            ></textarea>
            <div className="w-full flex justify-end gap-3 mt-2">
                <button onClick={()=>{setOpenComment(false)}} className="w-24 text-success border border-success rounded-lg py-3">Cancel</button>
                <button className="w-24 text-white bg-success rounded-lg py-3" type="submit">Post</button>
            </div>
        </form>
    </>
  )
}
