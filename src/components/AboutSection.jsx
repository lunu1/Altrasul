import CountUp from "react-countup";
import h1 from "../assets/images/aboutUs1.jpg";


const AboutUs = () => {
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
          <p className="font-bold text-red-600"> About Altrasul</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl bona-nova-sc-bold leading-snug text-gray-900 mb-6">
            leading business setup <br /> and company registration in dubai
          </h1>
          <p className="text-gray-700 sm:text-lg mb-6">
            ALTRASUL is your trusted partner for business setup in Dubai,
            offering complete support for company formation, visa services, and
            corporate compliance. Whether you’re looking for expert advice on
            how to start a business in the UAE or need help with ongoing legal
            and administrative tasks, ALTRASUL simplifies the process and
            ensures success for your business, at every single step.
          </p>

          {/* Features Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Corporate Setup Experts
                </h3>
                <p className="text-gray-600">
                  Comprehensive services for every business need.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Regulatory Compliance Support
                </h3>
                <p className="text-gray-600">
                  Experienced professionals in complying with UAE regulations.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personalized Solutions
                </h3>
                <p className="text-gray-600">
                  Personalized business solutions for seamless operations.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
