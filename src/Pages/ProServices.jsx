import { useRef } from "react";
import { FirstServiceSection } from "../components/FirstSectionservice";
import HoverCard from "../components/HoverCard";
import { SecondSectionService } from "../components/SecondSectionservice";
import { Whatwedo } from "../components/Whatwedo";

const ProServices = () => {
  const FirstSectionservice = [
    {
      title: "Effective PRO Solutions for Your Business Growth in the UAE",
      subtitle: "Streamline Your Business Documentation with Ease",
      description:
        "From securing government approvals to handling legal paperwork, our PRO services ensure your business remains compliant and operational. <span style='color: red;'>ALTRASUL</span> simplifies complex processes, alleviating the burden of regulatory management, so you can focus on expanding your business.",
      image: "/ProserviceAbout.jpg",
    },
  ];
  
  const Secondserviceone = [
    {
      title: "Understanding PRO Services in the UAE",
      decs1:
        "PRO (Public Relations Officer) services in the UAE are essential for managing the paperwork, approvals, and renewals required by government authorities. PRO services streamline tasks like obtaining trade licenses, processing visa applications, and ensuring compliance with local laws, saving time and minimizing errors.",
      decs2:
        "<span style='color: red;'>ALTRASUL</span>'s top PRO services in Dubai handle all your interactions with government bodies, such as the Ministry of Labor, the Department of Economic Development, and immigration authorities. We ensure your business remains compliant with UAE regulations.",
      image: "/ProService.jpg",
    },
  ];
  
  const Servicedesc = [
    {
      title: "Trade License Services",
      desc:
        "Managing trade licenses is a key component of running a business in the UAE. <span style='color: red;'>ALTRASUL</span> handles the complete process of acquiring and renewing trade licenses, ensuring compliance with the Department of Economic Development (DED) and other relevant authorities. Whether you're obtaining a new license or renewing an existing one in Dubai, we manage the paperwork with ease.",
    },
    {
      title: "Document Clearing and Attestation",
      desc:
        "<span style='color: red;'>ALTRASUL</span> simplifies the processing of documents through efficient clearance and attestation services. Whether it's legal documents, contracts, or educational certificates, we ensure all documents are authenticated and recognized by UAE authorities. We make the entire process hassle-free for both personal and business needs.",
    },
    {
      title: "Government Liaison Services",
      desc:
        "As a trusted intermediary, <span style='color: red;'>ALTRASUL</span> communicates with government entities like the Ministry of Labor, the Immigration Department, and the Department of Economic Development. We ensure smooth and efficient dealings with these agencies on your behalf.",
    },
    {
      title: "Ensuring Regulatory Compliance",
      desc:
        "Adhering to UAE regulations is crucial for business success. <span style='color: red;'>ALTRASUL</span> provides ongoing assistance to ensure your business remains compliant with local laws, including labor laws, health, and safety regulations. We keep you informed about any changes in the law that may impact your operations.",
    },
    {
      title: "Employment Contract Assistance",
      desc:
        "<span style='color: red;'>ALTRASUL</span> assists with the drafting, renewal, and management of employment contracts in compliance with UAE labor laws. We protect both your business and your employees by ensuring legally sound agreements throughout the employment relationship.",
    },
    {
      title: "Customs and Trade Documentation",
      desc:
        "For businesses engaged in trade, <span style='color: red;'>ALTRASUL</span> takes care of customs documentation and clearance. We ensure that your import and export operations comply with all customs regulations, facilitating smooth and efficient business transactions.",
    },
  ];
  
  const Servicedesc1 = [
    {
      title: "Initial Consultation",
      desc:
        "Start with a thorough consultation where <span style='color: red;'>ALTRASUL</span> assesses your business needs. This helps us determine the specific PRO services required, whether it's visa processing in Dubai or corporate sponsorship services.",
    },
    {
      title: "Business Setup Planning",
      desc:
        "<span style='color: red;'>ALTRASUL</span> creates a tailored plan for setting up your business or registering your company in Dubai. This includes critical tasks like company formation and obtaining the required licenses. Our expert consultancy ensures that all legal requirements are fully addressed.",
    },
    {
      title: "Document Preparation and Submission",
      desc:
        "<span style='color: red;'>ALTRASUL</span> manages the preparation and submission of all necessary documents, from acquiring a business license to providing legal PRO support. We ensure that all regulatory requirements are met and your interactions with authorities are smooth.",
    },
    {
      title: "Government Approvals and Licensing",
      desc:
        "After submitting your documents, <span style='color: red;'>ALTRASUL</span> facilitates the government approval and licensing processes, including the renewal of trade licenses. Our expertise ensures you can navigate the UAE’s legal and regulatory system effortlessly.",
    },
    {
      title: "Ongoing Support",
      desc:
        "Once your business is established, <span style='color: red;'>ALTRASUL</span> continues to assist with ongoing requirements such as visa services and other corporate needs in Dubai. Our ongoing support ensures your business stays compliant and adapts to future requirements.",
    },
  ];
  
  const cardData = [
    {
      id: 1,
      title: "Simplified Government Procedures",
      description:
        "PRO services streamline tasks like visa processing, business license applications, and document attestation in the UAE. With <span style='color: black;'>ALTRASUL</span>, you can ensure these processes are handled quickly and accurately, minimizing delays and avoiding penalties.",
    },
    {
      id: 2,
      title: "Effortless Legal Compliance",
      description:
        "Maintaining compliance with UAE regulations is vital for any business. <span style='color: black;'>ALTRASUL</span>'s PRO services guarantee that your business setup, trade license renewals, and other legal obligations are smoothly managed, reducing the risk of fines or legal issues.",
    },
    {
      id: 3,
      title: "Time and Cost Savings",
      description:
        "By outsourcing tasks such as company formation and legal documentation to <span style='color: black;'>ALTRASUL</span>, you save both time and money. This is especially advantageous for startups, allowing them to focus on growth while we handle the administrative tasks.",
    },
    {
      id: 4,
      title: "Professional Guidance",
      description:
        "With <span style='color: black;'>ALTRASUL</span>, you gain access to expert advice on securing business licenses in Dubai and meeting other legal obligations. We simplify the process of starting and operating a business in the UAE, ensuring smooth operations from the beginning.",
    },
  ];
  
  

  const whatWeDoRef = useRef(null);

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
       <FirstServiceSection data={FirstSectionservice[0]} onLearnMore={scrollToWhatWeDo} />
      <SecondSectionService data={Secondserviceone[0]} />
      <div className="flex flex-col mt-8 justify-center items-center">
        <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">
          Our Expert Business Setup Services in Dubai
        </h1>
        <p>
          Altrasul provides a wide range of PRO services in the UAE, designed to
          streamline your business operations and ensure compliance with
          government requirements. Our offerings include:
        </p>
      </div>
      <div ref={whatWeDoRef}>
        <Whatwedo data={Servicedesc} />
      </div>
      <div className="flex items-center justify-center flex-col my-6">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 py-4">
        Benefits of PRO Services in Dubai
        </h1>
        <p className="mx-20 text-center py-2">
        Leveraging PRO services in Dubai can bring immense value to your business. Here’s how:
        </p>
        <HoverCard data={cardData} />
      </div>
      <div className="flex flex-col items-center justify-center py-8">
       <h1 className="text-2xl bona-nova-sc-bold text-red-600 pt-5">Step-by-Step Process of PRO Services</h1>
      <Whatwedo data={Servicedesc1} />
      <p className="mx-20 text-center py-2">
      Setting up, registering, and operating a business in Dubai can be challenging, but you don’t have to face it alone. From business setup and visa processing to adhering to UAE regulations,<span className="text-red-600 font-semibold">Altrasul</span>  provides the expertise to guide you every step of the way.
        </p>
        <p className="mx-20 text-center py-2">
        If you're ready to simplify your business journey and benefit from the best PRO services in Dubai, contact us today!
        </p>
      </div>
    </>
  );
};

export default ProServices;
