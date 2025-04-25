import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, LinkedIn } from "../assets/icons/Icons";

const Footer = () => {
  return (
    <div className="bg-black/80 text-white py-10 flex flex-col space-y-10px-0 md:px-5 md:py-5">
      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:px-40 py-10">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>
          ALTRASUL is your trusted partner for business setup, offering expert guidance for company formation, visa services, and compliance
          </p>
        </div>
        <div className="flex-1 space-y-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="flex flex-col">
            <Link to="/" className="text-red-600 hover:underline">Home</Link>
            <Link to="/about" className="text-red-600 hover:underline">About us</Link>
            <Link to="/businesssetup" className="text-red-600 hover:underline">Bussiness Setup</Link>
            <Link to="/visaservice" className="text-red-600 hover:underline">UAE Visa Service</Link>
            <Link to="/proservice" className="text-red-600 hover:underline">Pro Services</Link>
            <Link to="/trademark" className="text-red-600 hover:underline">Trademark Services</Link>
            <Link to="/certification" className="text-red-600 hover:underline">Certificate Attestation</Link>
            <Link to="/contact" className="text-red-600 hover:underline">Contact us</Link>
          </div>
        </div>
        <div className="flex-1 space-y-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Contact No.: +971 54 539 0080</p>
          <p>info@altrasul.net</p>
          <div className="flex justify-center lg:justify-start space-x-3">
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Instagram />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <LinkedIn />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Twitter />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-500 pt-5 space-y-2">
        <p>&copy; {new Date().getFullYear()}Altrasul. All rights reserved.</p>
        <p>
          <a href="#" className="text-red-500 hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="text-red-500 hover:underline">Terms of Service</a>
        </p>
        <p>Developed by Digtel</p>
      </div>
    </div>
  );
};

export default Footer;