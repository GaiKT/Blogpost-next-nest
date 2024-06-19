
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faCheck } from '@fortawesome/free-solid-svg-icons';

const DropdownCreatePost = () => {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    };

  return (
    <>
      <div className="dropdown text-textcolor">
        <label tabIndex={0} className="m-1 text-sm flex gap-1 h-10 items-center cursor-pointer border border-success rounded-lg text-success justify-between px-2 md:w-2/5">
            Choose a community
            <span>
                <FontAwesomeIcon icon={faChevronDown} width={10}/>
            </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-lg w-full"
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

    </>
  );
};

export default DropdownCreatePost;
