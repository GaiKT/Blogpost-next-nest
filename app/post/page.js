"use client"

import Post from "../component/post";
import Sidebar from "../component/sidebar";
import Dropdown from "../component/dropdown";
import Createpost from "../component/createpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch ,faPenToSquare , faTrash} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect } from "react";
import { useAuth } from "@/contexts/authcontext";
import axios from "axios";

export default function Page() {

  const [posts , setPosts] = useState([])
  const [keyword , setKeyword] = useState('')
  const {state} = useAuth()

  const getPosts = async () => {
    const result = await axios.get(`http://localhost:5000/posts/?user_id=${state._id}?keyword=${keyword}`)
    setPosts(result.data)
  }

  useEffect(()=>{
    getPosts()
  },[keyword , posts])

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar/>
      <main className="flex flex-col gap-5 md:w-4/6 p-6">
        <div className="flex items-center gap-2">
          <label className="w-full flex gap-2 p-2 border border-green100 rounded-md">
            <FontAwesomeIcon icon={faSearch} width={20}/>
            <input type="text" 
            onChange={(e)=>{setKeyword(e.target.value)}}
            className="bg-grey100 w-full outline-none" 
            placeholder="Search" />
          </label> 
          <div className="flex gap-2 items-center">
            <Dropdown/>
            <Createpost user_id={state._id}/>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          {
            posts.map((post , index) =>{
              return (
                <div className="relative">
                  <Post post={post}  key={index} user={state}/>
                  <div className="flex gap-4 items-center text-green300 absolute top-5 right-5">
                    <span className="cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} width={16}/></span>
                    <span className="cursor-pointer"><FontAwesomeIcon icon={faTrash} width={16}/></span>
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          posts.length === 0 &&             
          <div className="h-80 flex w-full justify-center items-center">
            <p>You don't have post. You can create it! </p>
          </div>
          }
      </main>
    </div>
  );
}
