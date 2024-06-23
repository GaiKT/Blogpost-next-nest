
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Dropdown = ({communitySet}) => {

  const menu = ['Choose a community','History', 'Food' , 'Pets' , 'Health', 'Fashion' , 'Exercise' , 'Others' ]

  const [community , setCommunity] = useState(0)

  const handleClick = (index) => {
    setCommunity(index)
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  useEffect(()=>{

    if(community !== 0) {
      communitySet(menu[community])
    }
  
  },[community])

  return (
    <>
      {/* Desktop */}
      <div className="dropdown dropdown-end text-textcolor max-md:hidden">
        <label tabIndex={0} className="m-1 flex gap-1 h-10 items-center cursor-pointer">
            Community
            <span>
                <FontAwesomeIcon icon={faChevronDown} width={10}/>
            </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-lg w-80"
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
      {/* Mobile */}
      <label className="md:hidden m-1 flex gap-1 h-10 items-center cursor-pointer" onClick={()=>document.getElementById('dropdown_model').showModal()}>
            Community
            <span>
                <FontAwesomeIcon icon={faChevronDown} width={10}/>
            </span>
      </label>
        <dialog id="dropdown_model" className="modal absolute top-[-105px] left-[-10px] outline-none">
            <ul tabIndex={0}
                className="model-box dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-lg w-52"
                >
                  {
                    menu.map((menu , index)=>{
                      if(index === community){
                        return (
                          <li key={index} onClick={()=>handleClick(index)}>
                            <form method="dialog" className='flex w-full justify-between rounded-none'>
                                <button className='w-full flex justify-between'>{menu} <FontAwesomeIcon icon={faCheck} width={10}/></button>  
                            </form>                            
                          </li>
                        )
                      }else {
                        return (
                          <li key={index} onClick={()=>handleClick(index)}>
                            <form method="dialog" className='flex w-full justify-between rounded-none'>
                                <button>{menu}</button>    
                            </form>
                          </li>                  
                        )
                      }
                      
                    })
                  }
            </ul>
       </dialog>
    </>
  );
};

export default Dropdown;
