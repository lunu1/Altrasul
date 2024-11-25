import { Feature } from "./Feature";

const features = [
    {
      title: "Business SetUp",
      description:
        "Expert assistance with business incorporation in the UAE",
    },
    {
      title: "UAE Visa Services",
      description:
        "Hassle-free visa applications and renewals.",
    },
    {
      title: "PRO Services",
      description:"Efficient management of government documentation",
    },
    {
      title: "Trademark Services",
      description:
        "Protect your brand with professional trademark registration",
    },
    {
      title: "Certificate Attestation",
      description:
        "Ensure your documents are properly legalised.",
    },
    {
      title: "Tax & Accounting",
      description:
        "Comprehensive tax and accounting solutions for businesses",
    },
  ];


export const Service = () => {
  return (
    <div className="bg-black/80 px-5 sm:px-52 py-10 sm:py-20">
      <div className="flex flex-col sm:flex-row py-5 sm:py-20 justify-center items-center text-white ">
        <div className="sm:w-3/6">
          <p className="text-red-600">- Our Bussiness Services in UAE</p>
          <h1 className="text-4xl bona-nova-sc-bold">
            Complete UAE Business Solutions for Growth and Success
          </h1>
        </div>
        <div  className="sm:w-3/6">
          <p>
            ALTRASUL is committed to being the best business setup & company
            registration in Dubai, offering expert guidance and personalised
            support. Our services streamline every aspect of establishing and
            growing your business in the UAE, ensuring a seamless journey from
            start to success.
          </p>
        </div>
       
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-3  sm:flex-1">
          {features.map(({ title, description }, index) => (
              <Feature key={index} title={title} description={description} />
          ))}
        </div>
    </div>
  );
};
