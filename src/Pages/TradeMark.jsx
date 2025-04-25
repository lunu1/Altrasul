import { desc, title } from "framer-motion/client";
import { FirstServiceSection } from "../components/FirstSectionservice";
import HoverCard from "../components/HoverCard";
import { SecondSectionService } from "../components/SecondSectionservice";
import { Whatwedo } from "../components/Whatwedo";
import { FAQs } from "../components/FAQ";
import { useRef } from "react";

const Trademark = () => {
  const FirstSectionservice = [
    {
      title:
        "Trademark Registration in Dubai, UAE – Secure Your Brand with Expert Support",
      subtitle: "Quick and Reliable Trademark Protection in Dubai",
      description:
        "Protect your brand’s identity in the UAE with <span style='color: red;'>ALTRASUL</span>'s comprehensive trademark registration services. We provide tailored solutions to safeguard your intellectual property, managing every step of the process to ensure full compliance with UAE regulations.",
      image: "/TradeMark.jpg",
    },
  ];

  const Secondserviceone = [
    {
      title: "Trademark Registration Services",
      decs1:
        "Trademark registration in the UAE offers essential legal protection for your brand, granting you exclusive rights to use your name, logo, or symbol within the region. This safeguard prevents unauthorized usage and empowers you to take legal action against any infringements.",
      decs2:
        "<span style='color: red;'>ALTRASUL</span> provides comprehensive support for trademark registration in the UAE. From conducting an in-depth trademark search to avoid conflicts, to preparing and filing your application with the UAE Ministry of Economy, we handle every step. We also monitor the progress of your application, address any objections, and assist with renewals post-registration. With <span style='color: red;'>ALTRASUL</span>, your brand stays protected and secure in the competitive UAE market.",
      image: "/Trademark2.jpg",
    },
  ];

  const Servicedesc = [
    {
      title: "Trademark Consultation",
      desc: "As experienced trademark agents based in Dubai, we begin by understanding your business requirements and the trademark you wish to register.",
    },
    {
      title: "Trademark Search",
      desc: "Before proceeding, we conduct a comprehensive search in the UAE’s trademark database to confirm that your trademark is distinctive and does not conflict with existing registrations. This minimizes the risk of application rejection.",
    },
    {
      title: "Document Preparation",
      desc: "We take care of all the required documentation, including your trademark design, business license, identification documents, and any necessary Power of Attorney forms.",
    },
    {
      title: "Application Submission",
      desc: "Once all documents are in order, we submit your trademark application to the UAE Ministry of Economy on your behalf. This includes accurately classifying your trademark under the appropriate category of goods or services.",
    },
    {
      title: "Fee Management",
      desc: "We handle all official fees associated with the application process to ensure a smooth filing experience.",
    },
    {
      title: "Ministry Review",
      desc: "The UAE Ministry of Economy reviews the submitted application. If no objections are raised, your trademark will be published in the Official Gazette.",
    },
    {
      title: "Official Gazette Publication",
      desc: "During this stage, the public has 30 days to raise any objections to the registration. If no oppositions are made, the trademark moves toward final registration.",
    },
    {
      title: "Trademark Registration",
      desc: "After the successful completion of the publication phase with no objections, your trademark will be officially registered. You will receive a certificate confirming your trademark’s registration, securing your brand’s legal protection in the UAE.",
    },
    {
      title: "Trade License Renewal Services",
      desc: "In addition to trademark registration, we assist with renewals and updates to ensure your trademark remains protected. We also offer support with trade license renewal in Dubai as part of our comprehensive business solutions.",
    },
  ];

  const Servicedesc1 = [
    {
      title: "Generic Terms",
      desc: "Words commonly used to describe a product or service cannot be registered (e.g., using APPLE for selling apples).",
    },
    {
      title: "Misleading Marks",
      desc: "Trademarks that misrepresent the product’s origin, nature, or quality are prohibited.",
    },
    {
      title: "Offensive Content",
      desc: "Marks containing offensive, immoral, or inappropriate language, imagery, or symbols are not allowed.",
    },
    {
      title: "National Symbols",
      desc: "Trademarks cannot include national flags, emblems, or symbols, whether of the UAE or other nations.",
    },
    {
      title: "Confusing Similarity",
      desc: "Any mark that is identical or strikingly similar to an existing registered trademark cannot be approved.",
    },
    {
      title: "Violation of Laws",
      desc: "Marks that contravene UAE laws, promote illegal activities, or disrupt public order are restricted.",
    },
  ];

  const items = [
    {
      question: "What is a trademark?",
      answer:
        "A trademark is a distinct sign, symbol, or expression that identifies and protects your brand in the marketplace. Registering your trademark in the UAE grants you exclusive rights and prevents unauthorized use of your brand.",
    },
    {
      question: "Is trademark registration mandatory in the UAE?",
      answer:
        "Trademark registration is not legally required in the UAE, but it is highly recommended to secure your brand’s identity, prevent disputes, and safeguard your intellectual property.",
    },
    {
      question: "How long is a trademark valid in the UAE?",
      answer:
        "A trademark in the UAE is valid for 10 years. After this period, it can be renewed, typically alongside the renewal of your trade license.",
    },
    {
      question: "How much does it cost to register a trademark in the UAE?",
      answer:
        "The cost of trademark registration varies depending on the services required, such as legal and translation support. For a personalized quote, reach out to ALTRASUL today.",
    },
    {
      question: "Can I trademark a slogan or name?",
      answer:
        "Yes, you can trademark a slogan or name if it meets UAE trademark requirements and is unique. ALTRASUL can guide you through the steps to protect your slogan or name effectively.",
    },
    {
      question:
        "What symbols or marks cannot be registered as trademarks in the UAE?",
      answer:
        "Trademarks that violate public morals, include religious symbols, or feature government emblems cannot be registered in the UAE.",
    },
    {
      question:
        "Can I file a single trademark application for all GCC countries?",
      answer:
        "No, each GCC country requires a separate trademark application. However, ALTRASUL provides expert assistance to help you navigate trademark registration across multiple jurisdictions.",
    },
    {
      question: "How can ALTRASUL assist with trademark registration in Dubai?",
      answer:
        "At ALTRASUL, we offer comprehensive trademark registration services in Dubai. From initial consultation to final approval, our team ensures a seamless process to protect your brand in the UAE.",
    },
  ];

  const whatWeDoRef = useRef(null);

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FirstServiceSection
        data={FirstSectionservice[0]}
        onLearnMore={scrollToWhatWeDo}
      />
      <SecondSectionService data={Secondserviceone[0]} />
      <div className="flex flex-col mt-8 justify-center items-center">
        <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">
          How to File a Trademark in UAE with <span className="text-red-600">ALTRASUL</span> 
        </h1>
        <p>
          At <span className="text-red-600">ALTRASUL</span>, we make the trademark registration process in the UAE
          seamless, ensuring your intellectual property is safeguarded without
          complications. Here’s how we manage it for you:
        </p>
      </div>
      <div ref={whatWeDoRef}>
        <Whatwedo data={Servicedesc} />
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 pt-5">
          UAE Trademark Registration Restrictions
        </h1>
        <p className="mx-20 text-center py-2">
          When filing a trademark in the UAE, it is crucial to understand the
          limitations on what can and cannot be registered. Below are the
          primary restrictions:
        </p>
        <Whatwedo data={Servicedesc1} />
        <p className="mx-20 text-center py-2">
          Understanding these restrictions is essential for a successful
          trademark application in the UAE. <span className="text-red-600">ALTRASUL</span> ensures compliance with all
          UAE trademark laws, helping you navigate the process without any
          issues.{" "}
        </p>
      </div>
      <FAQs data={items} />
    </>
  );
};

export default Trademark;
