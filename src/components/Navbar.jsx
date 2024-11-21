import Logo from "../assets/images/Logo.jpg";
import { Link } from "react-router-dom";
import { Call } from "../assets/icons/Icons";



const Navbar = () => {
  return (
    <div className="top-0  h-28 flex px-20">
        <div className="w-1/6 h-28">
            <img src={Logo} alt="gg" className="object-cover"/>
        </div>
      <div className="flex flex-col h-28 flex-grow ">
        <div className="h-14 flex items-center">
          <h1>h</h1>
        </div>
        <div className="border-t-[1px] border-t-black/5 flex justify-between">
          <div className="flex space-x-8 items-center h-14">
             <Link to="/">Home</Link>
             <Link to="/">About</Link>
             <Link to="/">Our Services</Link>
             <Link to="/">Blogs</Link>
             <Link to="/">Contact</Link>

          </div>
          <div className="flex w-1/6 space-x-3 py-3">
            <div className="flex items-center">
<Call/>
            </div>
          <div>
            <h3 className="text-xs">Talk to Us</h3>
            <h1>+971 565 704704</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
