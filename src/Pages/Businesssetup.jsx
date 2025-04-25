import {FirstServiceSection} from "../components/FirstSectionservice";
import { SecondSectionService } from "../components/SecondSectionservice" ;
import { Whatwedo } from "../components/Whatwedo";
import { ServiceFeature } from "../components/ServiceFeature";
import { FAQs } from "../components/FAQ";
import { useEffect, useRef } from "react";


const FirstSectionservice = [
  {
    title: "Launch Your Business in Dubai with a Leading Business Setup Provider",
    subtitle: "Affordable Business Setup in Dubai, UAE",
    description:
      '<span style="color: red;">ALTRASUL</span> delivers effortless business setup services in Dubai for entrepreneurs and organizations of all scales. Whether establishing a mainland, free zone, or offshore company, our team offers professional guidance every step of the process.',
    image: "/aboutUs1.jpg",
  },
];

const Servicedesc = [
  {
    title: "Mainland Company Setup in Dubai – Access to Local and Global Markets",
    desc: "Setting up a mainland business in Dubai enables you to operate freely across the UAE and internationally. This setup requires a local sponsor or service agent, but with <span style=\"color: red;\">ALTRASUL</span>, we make the process easier, ensuring the swift launch of your company. We assist in selecting the right business activity, obtaining trade licenses, and ensuring legal compliance. Partner with <span style=\"color: red;\">ALTRASUL</span> for a seamless setup experience."
  },
  {
    title: "Free Zone Company Setup in Dubai – Enjoy Full Ownership",
    desc: "Dubai’s free zones are attractive for entrepreneurs and foreign investors, offering benefits like 100% foreign ownership, tax exemptions, and streamlined customs processes. Each free zone is tailored for specific industries. <span style=\"color: red;\">ALTRASUL</span> helps you select the best free zone for your business and manages the complete setup process. We handle everything from registration to obtaining your trade license."
  },
  {
    title: "Offshore Company Formation – Safeguard Assets and Ensure Privacy",
    desc: "Offshore company formation in Dubai provides asset protection, confidentiality, and tax optimization. Offshore businesses enjoy tax exemptions and privacy regarding ownership. <span style=\"color: red;\">ALTRASUL</span> supports you in selecting the best offshore jurisdiction and ensures compliance with international and local laws, simplifying the setup process."
  },
  {
    title: "Trade License Issuance & Renewal – Keep Your Business Compliant",
    desc: "Securing a trade license is vital for business setup. Whether for a mainland, free zone, or offshore company, <span style=\"color: red;\">ALTRASUL</span> ensures you receive the correct trade license for your business. We also offer license renewal services to ensure compliance with Dubai’s regulations, avoiding penalties and ensuring smooth business operations."
  },
  {
    title: "Simplified Corporate Bank Account Opening in Dubai",
    desc: "Opening a corporate bank account in Dubai can be challenging, especially for new businesses. <span style=\"color: red;\">ALTRASUL</span> simplifies the process by assisting with documentation and connecting you with trustworthy banks. We ensure a smooth, efficient account opening process, providing a stable financial foundation for your business."
  },
  {
    title: "Comprehensive Visa Services – Simplified Business and Employment Visas",
    desc: "<span style=\"color: red;\">ALTRASUL</span> offers a range of visa services, including business, employment, and investor visas. From document preparation to submission, we ensure timely and smooth visa approvals. Stay updated with the latest regulations as we take care of your visa needs, so you can focus on running your business."
  }
];

const ServicedescSec = [
  {
    title: "Initial Consultation",
    desc: "We begin by understanding your business goals and advising on the best setup option—mainland, free zone, or offshore."
  },
  {
    title: "Business Activity Selection",
    desc: "We help choose the right business activity and structure based on your objectives and legal requirements in Dubai."
  },
  {
    title: "Company Name Reservation",
    desc: "We assist in reserving your company name, ensuring it meets all UAE regulatory guidelines."
  },
  {
    title: "License Application",
    desc: '<span style="color: red;">ALTRASUL</span> handles the paperwork and submits your trade license application to the relevant authorities for mainland, free zone, or offshore setups.'
  },
  {
    title: "Document Preparation & Submission",
    desc: "We prepare and submit all required documents, including shareholder agreements, passport copies, and other legal paperwork."
  },
  {
    title: "Visa Processing",
    desc: "We assist with visa processing and bank account opening."
  },
  {
    title: "Bank Account Opening",
    desc: "We guide you through the corporate bank account setup process, ensuring you meet all the necessary criteria."
  },
  {
    title: "Final Approval & Company Formation",
    desc: "Once approvals are received, your business is officially established and ready to operate in Dubai."
  }
];

const features = [
  {
    title: "Unmatched Local Expertise",
    description:
      "In a competitive market like Dubai, local expertise is essential. At <span style=\"color: red;\">ALTRASUL</span>, our team’s years of experience in setting up businesses in the UAE provides valuable insights and connections to ensure your setup is seamless."
  },
  {
    title: "Tailored Solutions for Every Business",
    description:
      "There’s no one-size-fits-all solution for business setups in Dubai. Whether you're a startup, SME, or large corporation, we customize our services to meet your unique needs, ensuring your business is primed for success."
  },
  {
    title: "Comprehensive End-to-End Support",
    description: "<span style=\"color: red;\">ALTRASUL</span> offers support throughout the entire process, from initial consultation to full business operationalization, covering everything from company formation to visa processing and bank account setup."
  },
  {
    title: "Efficient, Transparent Process",
    description: "We prioritize efficiency without sacrificing quality. At <span style=\"color: red;\">ALTRASUL</span>, we offer transparent pricing with no hidden fees, ensuring your business is set up quickly and without complications."
  }
];

const Secondserviceone = [
  {
    title: "Start Your Business in Dubai with the Best Business Setup Provider",
    decs1: "Affordable Business Setup in Dubai, UAE",
    decs2: '<span style="color: red;">ALTRASUL</span> provides seamless business setup services in Dubai, helping entrepreneurs of all sizes establish mainland, free zone, or offshore companies with expert guidance every step of the way.',
    image: "/Bussinessp.jpg"
  }
];

const items = [
  {
    question: "How long does it take to set up a business in Dubai?",
    answer:
      "The time it takes to establish a business in Dubai depends on the type of setup. Mainland businesses typically take 2-3 weeks, free zone setups may take 3-4 weeks, and offshore formations take around 1-2 weeks. ALTRASUL expedites the process by managing paperwork and liaising with authorities."
  },
  {
    question: "What is the cost of setting up a company in Dubai?",
    answer:
      "The cost of setting up a business in Dubai varies based on factors such as the type of setup, location, and the number of visas required. For an exact quote, contact us for a free consultation. We offer clear, transparent pricing with no hidden fees."
  },
  {
    question: "What documents are required for business setup in Dubai?",
    answer:
      "Documents typically required include: ● Passport copies of shareholders and directors ● Proof of residence ● Proposed company name(s) ● Business plan (for certain activities) ● Memorandum of Association (MOA) ALTRASUL assists in gathering and preparing all necessary documents."
  },
  {
    question: "Can foreigners own 100% of a company in Dubai?",
    answer:
      "Yes, foreign ownership of 100% of a company is possible in Dubai, especially in free zones. Recent reforms also allow 100% foreign ownership in certain mainland business activities. ALTRASUL provides expert guidance to ensure you select the optimal ownership structure."
  }
];



const Businessetup = () => {
  const whatWeDoRef = useRef(null);


const scrollToWhatWeDo = () => {
  whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
};

 useEffect(()=>{
      window.scrollTo(0,0);
    })
  return (
    <div>
      <FirstServiceSection data={FirstSectionservice[0]} onLearnMore={scrollToWhatWeDo} />
      <SecondSectionService data={Secondserviceone[0]} />
      <div className="flex flex-col mt-8 items-center">
      <h1 className="text-4xl text-center  bona-nova-sc-bold sm:m-5">Our Expert Business Setup Services in Dubai</h1>
      </div>
     
      <div ref={whatWeDoRef}>
        <Whatwedo data={Servicedesc} />
      </div>

      <div className="sm:px-48  py-16">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-2  sm:flex-1">
          {features.map(({ title, description }, index) => (
              <ServiceFeature key={index} title={title} description={description} />
          ))}
      </div>
      </div>

      <div className="flex flex-col mt-8 items-center">
      <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">Step-by-Step Process for Setting Up Your Business in Dubai
      </h1>
      <p className="text-center">Setting up a business in Dubai is easy with VISANDBIZ, it’s straightforward and hassle-free. Here’s how we simplify your journey from initial consultation to full company formation:</p>
      </div>
      <Whatwedo data={ServicedescSec}/>

      <FAQs data={items}/>

    </div>
  );
};

export default Businessetup;
