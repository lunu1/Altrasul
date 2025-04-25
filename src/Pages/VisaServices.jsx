import { FirstServiceSection } from "../components/FirstSectionservice";
import { SecondSectionService } from "../components/SecondSectionservice";
import { Whatwedo } from "../components/Whatwedo";
import { ServiceFeature } from "../components/ServiceFeature";
import { FAQs } from "../components/FAQ";
import { motion } from "framer-motion";
import HoverCard from "../components/HoverCard";
import { useRef } from "react";

const FirstSectionservice = [
  {
    title:
      "UAE Visa Solutions – Swift and Dependable Dubai Business Visa Processing",
    subtitle: "Effortless Business and Employment Visas in Dubai, UAE",
    description:
      "Experience the simplest way to apply for a Business VISA and Employment VISA in the UAE with <span style='color: red;'>ALTRASUL</span>. We simplify the process of obtaining a business VISA in Dubai, ensuring fast approvals and adherence to all UAE residency visa standards.",
    image: "/Digitalmarket.jpg",
  },
];

const Servicedesc = [
  {
    title:
      "Mainland Company Formation in Dubai – Access Both Local and Global Markets",
    desc: "Starting a mainland company in Dubai offers the flexibility to operate freely within the UAE and globally. This setup requires a local sponsor or service agent, but with <span style='color: red;'>ALTRASUL</span>, we make the process smooth and hassle-free. We assist in selecting the right business activity, securing the necessary trade licenses, and ensuring compliance with UAE regulations. Partnering with <span style='color: red;'>ALTRASUL</span> gives you access to our local expertise and vast network, making your mainland business setup simple and efficient.",
  },
  {
    title: "Free Zone Company Setup in Dubai – Enjoy Full Ownership Benefits",
    desc: "Dubai’s free zones attract businesses by offering perks such as 100% foreign ownership, tax exemptions, and smooth customs processes. Each free zone caters to specific sectors, providing tailored infrastructure and services. With <span style='color: red;'>ALTRASUL</span>, we guide you in selecting the ideal free zone for your business, ensuring you make the most of these incentives. We handle every detail of the setup, from company registration to trade license issuance, making your Dubai free zone experience effortless. Popular zones include DMCC, DIC, and JAFZA.",
  },
  {
    title: "Offshore Company Formation – Secure Your Assets, Ensure Privacy",
    desc: "Offshore company formation in Dubai is ideal for those seeking privacy, asset protection, and tax advantages. Offshore companies are tax-exempt and offer discretion regarding ownership details. <span style='color: red;'>ALTRASUL</span> assists in navigating offshore setup by selecting the best jurisdiction, ensuring compliance with international and local laws. We manage all paperwork, making the process clear and straightforward, whether you choose JAFZA Offshore or RAK Offshore.",
  },
  {
    title:
      "Trade License Issuance & Renewal – Keep Your Business Running Without Hassle",
    desc: "Acquiring the correct trade license is crucial for any business setup. Whether your company is mainland, free zone, or offshore, <span style='color: red;'>ALTRASUL</span> ensures you secure the appropriate trade license. We also provide renewal services to maintain compliance with Dubai’s regulatory standards. With <span style='color: red;'>ALTRASUL</span>, you avoid unnecessary delays and penalties, ensuring smooth business operations.",
  },
  {
    title: "Simplified Bank Account Opening in Dubai",
    desc: "Opening a corporate bank account in Dubai can be challenging for new businesses. <span style='color: red;'>ALTRASUL</span> eases the process by assisting you with documentation requirements and connecting you to reputable banks. We ensure that your application meets all criteria for a smooth account opening, allowing you to focus on your business growth.",
  },
  {
    title:
      "Comprehensive Visa Services – Simplifying Business & Employment Visas",
    desc: "Whether you require a business visa, employment visa, or investor visa, <span style='color: red;'>ALTRASUL</span> offers end-to-end services for Dubai business visa applications. We take care of the entire process, from document preparation to submission, ensuring fast and accurate approvals. Our experts stay up to date with Dubai’s visa regulations, offering guidance at every step. With <span style='color: red;'>ALTRASUL</span>, you focus on your business, while we handle the visa complexities.",
  },
];

const features = [
  {
    title: "Unmatched Local Knowledge",
    description:
      "Dubai’s business landscape requires deep local expertise. <span style='color: red;'>ALTRASUL</span> brings years of experience setting up companies in the UAE, providing you with valuable insights and connections for a smooth setup.",
  },
  {
    title: "Tailored Solutions for Every Business",
    description:
      "Dubai’s business setup isn’t one-size-fits-all. <span style='color: red;'>ALTRASUL</span> customizes its services for startups, SMEs, and large corporations, ensuring your business is on the right path from the beginning.",
  },
  {
    title: "Full-Service Support",
    description:
      "From the first consultation to full operation, <span style='color: red;'>ALTRASUL</span> supports you every step of the way. Our services cover business formation, licensing, visa processing, and bank account opening.",
  },
  {
    title: "Fast, Transparent Service",
    description:
      "Time is critical, so we prioritize speed and efficiency while maintaining high quality. With <span style='color: red;'>ALTRASUL</span>, there are no hidden fees, and we work diligently to set up your business as quickly as possible.",
  },
];

const Secondserviceone = [
  {
    title: "UAE Visa Services for Companies",
    decs1:
      "Whether you're an entrepreneur starting a business, a professional looking for an employment VISA, or an investor wanting to take advantage of Dubai’s business opportunities, <span style='color: red;'>ALTRASUL</span> streamlines the visa process from start to finish.",
    decs2:
      "Our team is always up-to-date with the latest immigration rules and regulations, ensuring a smooth application process. With <span style='color: red;'>ALTRASUL</span>, your visa approval process will be quick and personalized.",
    image: "/Digital.jpg",
  },
];

const ServicedescSec = [
  {
    title: "UAE Business Visa Criteria",
    desc: "To obtain a business visa, applicants must meet certain requirements, such as proof of business activity, financial stability, and a clean criminal record.",
  },
  {
    title: "Choosing the Right Business Activity",
    desc: "We help you select the ideal business activity and structure to match your goals and comply with Dubai’s legal requirements.",
  },
];

const DubaiVisa = [
  {
    title: "UAE Business Visa Criteria",
    desc: "To secure a business visa in the UAE, applicants must meet criteria like providing evidence of business activity, financial stability, and no criminal history.",
  },
  {
    title: "Dubai Business Visa Benefits",
    desc: "Having a business visa in Dubai opens many doors, from access to local markets to a tax-friendly environment, creating opportunities for growth and success.",
  },
];

const EmployementVisa = [
  {
    title: "UAE Employment Visa Requirements",
    desc: "The employment visa process starts once an employer in the UAE offers a job. Required documents include a valid passport, academic certificates, and a medical report. It’s crucial to comply with all labor laws to avoid delays.",
  },
  {
    title: "How to Obtain a UAE Employment Visa",
    desc: "<span style='color: red;'>ALTRASUL</span> works with employers and employees to streamline the visa process. We manage all the documentation and timelines, ensuring compliance with legal requirements and facilitating smooth visa approvals.",
  },
];

const InvestorVisa = [
  {
    title: "Investor Visa Eligibility in UAE",
    desc: "To qualify for an investor visa, applicants must meet specific criteria, such as making a significant investment in a local business or property.",
  },
  {
    title: "Benefits of the UAE Investor Visa",
    desc: "Investor visas offer multiple advantages, including long-term residency, the ability to sponsor family members, and flexibility in business activities.",
  },
  {
    title: "How to Apply for the UAE Investor Visa",
    desc: "<span style='color: red;'>ALTRASUL</span> assists investors with every step of the application process, offering personalized support and ensuring compliance. We take care of the paperwork, so you can focus on maximizing your investments.",
  },
];

const cardData = [
  {
    id: 1,
    title: "UAE Dependent Visa Requirements",
    description:
      "To secure a UAE dependent visa, you must submit proof of your relationship, financial stability, and accommodation arrangements. It’s essential to ensure that your documents are accurate and up-to-date.",
  },
  {
    id: 2,
    title: "How to Apply for a UAE Family Visa",
    description:
      "<span style='color: black;'>ALTRASUL</span> offers complete support for family and dependent visas. We guide you through the application process and ensure all necessary documents are in order for a smooth approval.",
  },
];

const VisaRenewal = [
  {
    id: 1,
    title: "The Importance of Timely Visa Renewal",
    description:
      "UAE visas come with specific validity periods, and failing to renew on time can result in penalties or cancellation. It’s vital to stay on top of renewal dates to maintain your legal status.",
  },
  {
    id: 2,
    title: "How <span style='color: black;'>ALTRASUL</span> Manages Visa Renewals",
    description:
      "<span style='color: black;'>ALTRASUL</span> offers proactive visa renewal services, ensuring your visa is renewed well before it expires. We handle all paperwork, track deadlines, and work with immigration authorities, so you don’t have to worry.",
  },
];

const VisaServices = () => {
  const whatWeDoRef = useRef(null);

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <FirstServiceSection
        data={FirstSectionservice[0]}
        onLearnMore={scrollToWhatWeDo}
      />
      <SecondSectionService data={Secondserviceone[0]} />
      <div className="flex flex-col mt-8 justify-center">
        <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">
          Our Expert Business Setup Services in Dubai
        </h1>
      </div>
      <div ref={whatWeDoRef}>
        <Whatwedo data={Servicedesc} />
      </div>
      <div className="sm:px-48  py-16">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-2  sm:flex-1">
          {features.map(({ title, description }, index) => (
            <ServiceFeature
              key={index}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="my-10">
        <div className="flex flex-col mt-8 justify-center ">
          <h1 className="text-4xl text-center  bona-nova-sc-bold sm:m-5">
            Our UAE Visa Services
          </h1>
          <h1 className="text-2xl text-center  bona-nova-sc-bold sm:m-5 text-red-600">
            Business Visa in Dubai, UAE
          </h1>
          <p className="text-center mx-24">
            Securing a Dubai business VISA is crucial for entrepreneurs and
            professionals looking to establish their presence in UAE. A business
            visa in UAE allows you to explore opportunities, attend meetings,
            and manage your business activities within the Emirates.
          </p>
        </div>
        <Whatwedo data={DubaiVisa} />
        <p className="text-center">
          <span className="text-red-600">ALTRASUL</span> will guide you through business VISA documentation, ensure
          that all forms are accurately completed, and liaise with immigration
          authorities to expedite your application.
        </p>
      </div>

      <div className="my-10">
        <div className="flex flex-col mt-8 justify-center">
          <h1 className="text-2xl text-center bona-nova-sc-bold sm:m-5 text-red-600">
            Employment Visa in Dubai, UAE
          </h1>
          <p className="text-center mx-24">
            The UAE is a magnet for global talent, and getting an employment
            visa is essential for professionals planning to work in Dubai. An
            employment visa grants a person the legal right to work and allows
            them to enjoy the lifestyle benefits that the UAE offers. If you’re
            an entrepreneur in Dubai and you want to bring in employees from
            different countries, then you’ll need to provide Dubai Employment
            Visa to those employees.
          </p>
        </div>
        <Whatwedo data={EmployementVisa} />
        <p className="text-center mx-24">
        <span className="text-red-600">ALTRASUL</span> will guide you through business VISA documentation, ensure
          that all forms are accurately completed, and liaise with immigration
          authorities to expedite your application.
        </p>
      </div>

      <div className="my-10">
        <div className="flex flex-col mt-8 justify-center">
          <h1 className="text-2xl text-center bona-nova-sc-bold sm:m-5 text-red-600">
            UAE Investor VISA
          </h1>
          <p className="text-center mx-24">
            The UAE is a prime destination for investors seeking to capitalize
            on a robust and diverse economy. An investor visa grants you the
            ability to reside in the UAE and manage your investments, offering a
            gateway to lucrative opportunities.
          </p>
        </div>
        <Whatwedo data={InvestorVisa} />
      </div>

      <div className="flex items-center justify-center flex-col my-6">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 py-4">
          Family/Dependent VISA in Dubai
        </h1>
        <p className="mx-20 text-center py-2">
          Bringing your loved ones to the UAE is a priority for many
          expatriates. A family or dependent visa allows you to sponsor your
          spouse, children, and other dependents so that your family can enjoy
          life in the UAE together.
        </p>
        <HoverCard data={cardData} />
      </div>

      <div className="flex items-center justify-center flex-col my-6">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 py-4">
          VISA Renewal Services in UAE
        </h1>
        <p className="mx-20 text-center py-2">
          You must maintain a valid visa to avoid fines and legal issues in the
          UAE. Whether it’s a business, employment, or family visa, timely
          renewal helps you comply with UAE immigration laws..
        </p>
        <HoverCard data={VisaRenewal} />
      </div>

      {/* <FAQs/> */}
    </div>
  );
};

export default VisaServices;
