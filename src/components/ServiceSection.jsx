import { Feature } from "./Feature";
import { FaBuilding, FaPassport, FaClipboardCheck, FaTrademark, FaCertificate, FaCalculator } from "react-icons/fa";

const features = [
  {
    title: "Business SetUp",
    description: "Professional assistance for incorporating your business in the UAE.",
    icon: FaBuilding,
  },
  {
    title: "UAE Visa Services",
    description: "Simplified and hassle-free visa applications and renewals.",
    icon: FaPassport,
  },
  {
    title: "PRO Services",
    description: "Efficient handling of government documentation and processes.",
    icon: FaClipboardCheck,
  },
  {
    title: "Trademark Services",
    description: "Secure your brand with expert trademark registration services.",
    icon: FaTrademark,
  },
  {
    title: "Certificate Attestation",
    description: "Proper legalization of documents for official use.",
    icon: FaCertificate,
  },
  {
    title: "Tax & Accounting",
    description: "End-to-end tax and accounting solutions tailored to your business needs.",
    icon: FaCalculator,
  },
];

export const Service = () => {
  return (
    <div className="bg-black/80 px-5 sm:px-52 py-10 sm:py-20">
      <div className="flex flex-col sm:flex-row py-5 sm:py-20 justify-center items-center text-white gap-7">
        <div className="sm:w-3/6">
          <p className="text-red-600">- Our Business Services in UAE</p>
          <h1 className="text-4xl bona-nova-sc-bold">
          Comprehensive UAE Business Solutions for Growth and Success
          </h1>
        </div>
        <div className="sm:w-3/6">
          <p>
          At  <span className="text-red-600">ALTRASUL</span>, we are dedicated to being the leading provider of business setup and company registration services in Dubai. We offer expert guidance and personalized support to streamline every aspect of establishing and growing your business in the UAE. From start to success, we ensure a seamless and efficient journey.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 sm:flex-1">
        {features.map(({ title, description, icon: Icon }, index) => (
          <Feature key={index} title={title} description={description} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};
