
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faCheck } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
};

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
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>History</a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between bg-green100 rounded-none'>Food <FontAwesomeIcon icon={faCheck} width={10}/></a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>Pets</a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>Health</a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>Fashion</a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>Exercise</a>
          </li>
          <li onClick={handleClick}>
            <a className='flex w-full justify-between rounded-none'>Others</a>
          </li>
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
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>History</button>    
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Food</button><FontAwesomeIcon icon={faCheck} width={10}/>
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Pets</button>
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Health</button>
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Fashion</button>
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Exercise</button>
                    </form>
                </li>
                <li onClick={handleClick}>
                    <form method="dialog" className='flex w-full justify-between rounded-none'>
                        <button>Others</button>
                    </form>
                </li>
            </ul>
       </dialog>
    </>
  );
};

export default Dropdown;
