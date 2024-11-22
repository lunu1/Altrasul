import Logo from "../assets/images/Logo.jpg";
import { Link } from "react-router-dom";
import { Call, Message, Phone, Whatsapp } from "../assets/icons/Icons";

const Navbar = () => {
  return (
    <div className="top-0  h-28 flex px-20 ">
      <div className="w-1/6 h-28 items-center flex">
        <img src={Logo} alt="gg" className="object-cover" />
      </div>
      <div className="flex flex-col h-28 flex-grow px-4">
        <div className="flex justify-between">
          <div className="h-14 flex items-center space-x-6 px-8 ">
            <div className="flex space-x-1 items-center">
              <Message height="1rem" width="1rem" />
              <p className="text-xs text-red-600">info@altrasul.net</p>
            </div>
            <div className="flex space-x-1 items-center">
              <Phone height="1rem" width="1.3rem" />
              <p className="text-xs text-red-600">info@altrasul.net</p>
            </div>
            <div className="flex space-x-1 items-center">
              <Whatsapp height="1.3rem" width="1.3rem" />
              <p className="text-xs text-red-600">info@altrasul.net</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-10 ">
            <Whatsapp height="1.2rem" width="1.5rem"/>
            <Message height="1rem" width="1.4rem" />

            <Phone height="1rem" width="1.5rem" />
            <Message height="1rem" width="1.4rem" />
          </div>
        </div>
        <div className="border-t-[1px] border-t-black/5 flex justify-between">
          <div className="flex space-x-8 items-center h-14 px-8 ">
            <Link className="hover:text-red-600" to="/">Home</Link>
            <Link className="hover:text-red-600"  to="/">About</Link>
            <Link className="hover:text-red-600"  to="/">Our Services</Link>
            <Link className="hover:text-red-600"  to="/">Blogs</Link>
            <Link className="hover:text-red-600"  to="/">Contact</Link>
          </div>
          <div className="flex w-1/6 space-x-3  items-center">
            <div className="flex items-center">
              <Call />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xs">Talk to Us</h3>
              <h1 className="text-xs">+971 565 704704</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
