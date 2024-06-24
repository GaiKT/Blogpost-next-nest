"use client"

import Post from "../component/post";
import Sidebar from "../component/sidebar";
import Dropdown from "../component/dropdown";
import Createpost from "../component/createpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect } from "react";
import { useAuth } from "@/contexts/authcontext";
import EditPosts from "../component/editposts";
import axios from "axios";
import Modeldelete from "../component/modeldelete";
import { useRouter } from 'next/navigation';

export default function Page() {

  const { state, loading } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getPosts = async (searchKeyword = '') => {
    try {
      const result = await axios.get(`http://localhost:5000/posts/ourblog`, {
        params: { user_id: state._id, keyword: searchKeyword }
      });
      setPosts(result.data);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (state._id) {
        getPosts(keyword);
      } 
    }
  }, [keyword, state._id, loading]);

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="flex flex-col gap-5 md:w-4/6 p-6">
        <div className="flex items-center gap-2">
          <label className="w-full flex gap-2 p-2 border border-green100 rounded-md">
            <FontAwesomeIcon icon={faSearch} width={20} />
            <input 
              type="text" 
              onChange={(e) => setKeyword(e.target.value)} 
              className="bg-grey100 w-full outline-none" 
              placeholder="Search" 
              value={keyword} 
            />
          </label> 
          <div className="flex gap-2 items-center">
            <Dropdown communitySet={setKeyword} />
            <Createpost id={state._id} />
          </div>
        </div>
        <div className="bg-white rounded-lg">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="relative" key={index}>
                <Post post={post} />
                <div className="flex gap-4 items-center text-green300 absolute top-5 right-5">
                  <EditPosts postData={post} />
                  <span className="cursor-pointer">
                    <Modeldelete post={post} />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="h-80 flex w-full justify-center items-center">
              <p>You don't have any posts. You can create one!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
