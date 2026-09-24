import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'

function Navbar() {

  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  }

  return (
    <div>
      <div className="text-white sm:flex hidden justify-between items-center px-20">
        <h1 className="text-green-500 font-bold text-2xl">REACT.</h1>
        <ul className="flex">
            <li className="p-6"><a href="">Home</a></li>
            <li className="p-6"><a href="">About</a></li>
            <li className="p-6"><a href="">Contact</a></li>
        </ul>
      </div>

      
      <div className="sm:hidden">
          <div className= "text-white flex justify-between items-center px-6 mt-6">
            <h1 className="text-green-500 font-bold text-2xl">REACT.</h1>
            
            <div onClick={handleClick} className="text-white cursor-pointer">
              {!menu ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <ul className={!menu ? "fixed -left-full" : "flex flex-col fixed top-6 left-0 mt-9 p-4 w-50 uppercase font-bold ease-in-out duration-500"}>
              <li className="p-6 border-b border-gray-600"><a href="">Home</a></li>
              <li className="p-6 border-b border-gray-600"><a href="">About</a></li>
              <li className="p-6 border-b border-gray-600"><a href="">Contact</a></li>
            </ul>
        </div>
      </div>
      

    </div>
    
  );
}

export default Navbar