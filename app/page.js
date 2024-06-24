"use client"

import Post from "./component/post";
import Sidebar from "./component/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./component/dropdown";
import Createpost from "./component/createpost";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authcontext";
import Navbar from "./component/navbar";

export default function Home() {

  const [posts , setPosts] = useState([])
  const [keyword , setKeyword] = useState('')
  const [loading ,setLoading] = useState(true)
  const {state} = useAuth()

  const getPosts = async () => {
    const result = await axios.get('http://localhost:5000/posts?keyword=' + keyword)
    setPosts(result.data)
    setLoading(false)
  }

  useEffect(()=>{
    getPosts()
  },[keyword])

  return (
    <>
      <Navbar/>
      <div className="flex w-full min-h-screen">
        <Sidebar/>
        <main className="flex flex-col gap-5 md:w-4/6 p-6">
          <div className="flex items-center gap-2">
            <label className="w-full flex gap-2 p-2 border border-green100 rounded-md">
              <FontAwesomeIcon icon={faSearch} width={20}/>
              <input type="text" 
              onChange={(e)=>{setKeyword(e.target.value)}}
              className="w-full outline-none bg-grey100" 
              placeholder="Search" />
            </label> 
            <div className="flex gap-2 items-center">
              <Dropdown communitySet={setKeyword}/>
              <Createpost id={state._id}/>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            {
              posts.length !== 0 ?
                posts.map((post , index) =>{
                  return <Post post={post} key={index}/>
                })
              :
                <div className="h-80 flex w-full justify-center items-center">
                  <p>{loading ? <span className="loading loading-spinner loading-lg"></span> : "don't have any posts. You can create one!"}</p>
                </div>
            }
          </div>
        </main>
      </div>
    </>
  );
}
