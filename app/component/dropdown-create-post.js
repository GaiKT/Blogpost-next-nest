
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const DropdownCreatePost = ({communitySet}) => {

  const menu = ['Choose a community','History' , 'Food' , 'Pets' , 'Health', 'Fashion' , 'Exercise' , 'Others' ]

  const [community , setCommunity] = useState(0)

  const handleClick = (index) => {
    setCommunity(index)
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  useEffect(()=>{
    communitySet(menu[community])
  },[community])

  return (
    <>
      <div className="dropdown text-textcolor">
        <label tabIndex={0} className="m-1 text-sm flex gap-1 h-10 items-center cursor-pointer border border-success rounded-lg text-success justify-between px-2 md:w-2/5">
            {menu[community]}
            <span>
                <FontAwesomeIcon icon={faChevronDown} width={10}/>
            </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-lg w-full"
        > 
          {
            menu.map((menu , index)=>{
              if(index === community){
                return (
                  <li key={index} onClick={()=>handleClick(index)}>
                    <a className='flex w-full justify-between bg-green100 rounded-none'>{menu} <FontAwesomeIcon icon={faCheck} width={10}/></a>
                  </li>
                )
              }else {
                return (
                  <li key={index} onClick={()=>handleClick(index)}>
                    <a className='flex w-full justify-between rounded-none hover:bg-green100'>{menu}</a>
                  </li>                  
                )
              }
               
            })
          }
        </ul>
      </div>
    </>
  );
};

export default DropdownCreatePost;
