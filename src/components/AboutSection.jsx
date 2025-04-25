import CountUp from "react-countup";
import h1 from "../assets/images/Aboutuss.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutUs = ({button}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Images */}
      
          <div className="relative w-full">
            <img
              src={h1}
              alt="Handshake"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 sm:top-20 left-[18vw] sm:left-[1vw] transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-4 sm:px-8 sm:py-10 rounded-lg">
              <CountUp start={0} end={3500} duration={2} separator="," />
              <br /> Satisfied Clients
            </div>
          </div>
      

        {/* Right Section - Text */}
        <div>
          <p className="font-bold text-red-600"> About  <span className="text-red-600">ALTRASUL</span></p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl bona-nova-sc-bold leading-snug text-gray-900 mb-6">
          Comprehensive Business Solutionsin Dubai          </h1>
          <p className="text-gray-700 sm:text-lg mb-6">
          At  <span className="text-red-600">ALTRASUL</span>, we make your business journey in the UAE seamless. From company formation and visa processing to tax management and trademark protection, we offer complete solutions to ensure your business operates effortlessly.
          </p>

          {/* Features Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10  flex items-center justify-center rounded-full">
                
                <img src="/Logo.jpg" alt="L" className=""  />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                Legal Compliance & Documentation                </h3>
                <p className="text-gray-600">
                Expert assistance with corporate legalities, PRO services, and document attestation, keeping your business compliant with UAE regulations.                 </p>
              </div>
            </div>

            <div className="flex items-center">
            <div className="w-10 h-10  flex items-center justify-center rounded-full">
                <img src="/Logo.jpg" alt="L" className=""  />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                Business Setup & Company Registration
                </h3>
                <p className="text-gray-600">
                Effortless solutions for establishing your business in Dubai, from company registration to operational setup, tailored to meet your specific needs.

</p>
              </div>
            </div>

            <div className="flex items-center">
            <div className="w-10 h-10  flex items-center justify-center rounded-full">
                
                <img src="/Logo.jpg" alt="L" className=""  />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                UAE Visa & Immigration Services                </h3>
                <p className="text-gray-600">
                Comprehensive support for UAE visa applications, renewals, and immigration processes, ensuring a smooth and hassle-free experience.                 </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}

          {button && (
 <div className="mt-8">
 <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md" onClick={()=>navigate("/about")}>
   Learn More About Us
 </button>
</div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
