"use client"

import Post from "../component/post";
import Sidebar from "../component/sidebar";
import Dropdown from "../component/dropdown";
import Createpost from "../component/createpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch ,faPenToSquare , faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Page() {

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar/>
      <main className="flex flex-col gap-5 md:w-4/6 p-6">
        <div className="flex items-center gap-2">
          <label className="w-full flex gap-2 p-2 border border-green100 rounded-md">
            <FontAwesomeIcon icon={faSearch} width={20}/>
            <input type="text" className="bg-grey100 w-full outline-none" placeholder="Search" />
          </label> 
          <div className="flex gap-2 items-center">
            <Dropdown/>
            <Createpost/>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="relative">
            <Post/>
            <div className="flex gap-4 items-center text-green300 absolute top-5 right-5">
              <span className="cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} width={16}/></span>
              <span className="cursor-pointer"><FontAwesomeIcon icon={faTrash} width={16}/></span>
            </div>
          </div>
          <div className="relative">
            <Post/>
            <div className="flex gap-4 items-center text-green300 absolute top-5 right-5">
              <span className="cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} width={16}/></span>
              <span className="cursor-pointer"><FontAwesomeIcon icon={faTrash} width={16}/></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
