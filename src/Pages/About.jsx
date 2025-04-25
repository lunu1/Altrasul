import { useEffect } from "react";
import AboutUs from "../components/aboutSection";
import { Whatwedo } from "../components/Whatwedo";

const About = () => {
 
  const Aboutdesc = [
    {
        title:"Business Setup",
        desc:"We provide end-to-end support for establishing your company in Dubai, whether it’s a free zone, mainland, or offshore setup. From selecting the right business structure to handling all legal requirements, we ensure a smooth and hassle-free process."
    },
    {
        title:"UAE Visa Service",
        desc:"Our visa services facilitate seamless visa processing for your employees and family members. Whether it's work visas or family sponsorship, we manage all the paperwork and government formalities to avoid unnecessary delays."
    },{
        title:"PRO Services",
        desc:"With our PRO services, navigating government regulations becomes effortless. From document processing to approvals, renewals, and liaising with authorities, we take care of everything, saving you time and effort."
    },{
        title:"Trademark Services",
        desc:"Secure your brand with our professional trademark services. We assist you in registering your trademark, safeguarding your intellectual property, and establishing a strong foothold in the UAE market."
    },{
        title:"Certificate Attestation",
        desc:"Our certificate attestation services ensure that your documents—whether educational, personal, or commercial—meet all legal requirements for use in the UAE."
    },
    {
        title:"Tax & Accounting",
        desc:"Stay on top of your financial obligations with our tax and accounting services. From VAT compliance to bookkeeping, we provide precise and timely solutions that help your business remain financially healthy and compliant with local regulations."
    }

  ]

    useEffect(()=>{
      window.scrollTo(0,0);
    })

  return (
    <>
      <div className="mt-28">

      <AboutUs />
      </div>
      <div className="flex flex-col mt-8 justify-center">
      <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">What We Do</h1>
      <p className="text-center text-lg"> At <span className="text-red-600 font-semibold">ALTRASUL</span>, our comprehensive range of services is designed to simplify and accelerate business operations in Dubai and across the UAE. Here’s how we can assist you:</p>
      </div>
      <Whatwedo data={Aboutdesc} />
        
    </>
  );
};

export default About;
