"use client"

import Post from "./component/post";
import Sidebar from "./component/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./component/dropdown";
import Createpost from "./component/createpost";

export default function Home() {

  return (
    <div className="flex w-full">
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
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </main>
    </div>
  );
}
