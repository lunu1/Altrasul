import { desc, title } from "framer-motion/client";
import { FirstServiceSection } from "../components/FirstSectionservice";
import HoverCard from "../components/HoverCard";
import { SecondSectionService } from "../components/SecondSectionservice";
import { Whatwedo } from "../components/Whatwedo";
import { FAQs } from "../components/FAQ";
import { useEffect, useRef } from "react";

const Certification = () => {
  const FirstSectionservice = [
    {
      title:
        "Get Your Documents Attested Quickly—Experts in Certificate Attestation in Dubai",
      subtitle: "Effortless Document Attestation in Dubai",
      description:
        "<span style='color: red;'>ALTRASUL</span> provides fast and reliable certificate attestation services in Dubai. Whether it's for educational, personal, or business documents, our skilled team ensures that your papers meet all the necessary legal standards in the UAE.",
      image: "/certificate.jpg",
    },
  ];
  
  const Secondserviceone = [
    {
      title: "Certificate Attestation Services in Dubai",
      decs1:
        "Certificate attestation is a vital procedure for verifying documents for official use in the UAE. Whether it’s for employment, educational, or legal purposes, this service is crucial to ensure your documents are recognized by local authorities in Dubai.",
      decs2:
        "<span style='color: red;'>ALTRASUL</span> offers comprehensive certificate attestation services in Dubai, covering everything from marriage certificate attestation to academic documents. We make the process smooth and efficient, ensuring your documents meet the highest standards of authenticity and compliance.",
      image: "/certificateB.jpg",
    },
  ];
  
  const Servicedesc = [
    {
      title: "Education Certificate Attestation in UAE",
      desc:
        "We verify degrees, diplomas, and school certificates to ensure they are valid for employment or further studies in the UAE. Having your educational documents attested is essential for securing jobs or enrolling in academic programs.",
    },
    {
      title: "Personal Document Attestation",
      desc:
        "This includes documents like birth certificates, marriage certificates, and death certificates. For example, marriage certificate attestation in Dubai is required when applying for family visas or completing legal formalities.",
    },
    {
      title: "Commercial Document Attestation",
      desc:
        "We authenticate business-related documents such as trade licenses, contracts, and agreements. Having these documents attested through the UAE embassy ensures compliance with legal requirements for seamless business operations.",
    },
    {
      title: "Legal Document Verification",
      desc:
        "Legal documents, such as affidavits, powers of attorney, and court orders, must be properly attested to be officially recognized in the UAE. This step validates their authenticity for legal proceedings.",
    },
  ];
  
  const Servicedesc1 = [
    {
      title: "Document Verification",
      desc:
        "The attestation process begins with <span style='color: red;'>ALTRASUL</span> verifying the authenticity of your documents. Whether it's for marriage certificate attestation or educational certificate attestation, we carefully check for any errors or discrepancies before submission.",
    },
    {
      title: "Notary Attestation",
      desc:
        "Next, your documents are notarized by a local notary to confirm their legitimacy. This step is crucial for validating the document’s authenticity at a national level.",
    },
    {
      title: "Ministry Attestation",
      desc:
        "After notarization, your documents are submitted to the UAE Ministry of Foreign Affairs for further attestation. This process ensures your documents are valid for official use in the UAE.",
    },
    {
      title: "Embassy Attestation",
      desc:
        "For international use, <span style='color: red;'>ALTRASUL</span> takes care of the attestation process through the relevant embassy, ensuring that your documents are officially recognized in the country of origin.",
    },
    {
      title: "Final Step – Delivery",
      desc:
        "Once the attestation process is complete, we ensure the safe and timely delivery of your attested documents, providing a seamless experience from start to finish.",
    },
  ];
  
  const items = [
    {
      question: "What is a trademark?",
      answer:
        "A trademark is a unique sign, symbol, or expression that identifies and protects your brand in the marketplace. Registering your trademark in the UAE provides exclusive rights to your brand and prevents unauthorized usage.",
    },
    {
      question: "Is trademark registration mandatory in the UAE?",
      answer:
        "Trademark registration is not legally required in the UAE, but it is strongly recommended to protect your brand’s identity, avoid disputes, and secure your intellectual property.",
    },
    {
      question: "How long is a trademark valid in the UAE?",
      answer:
        "A trademark in the UAE is valid for 10 years. After this period, it can be renewed for additional periods, typically along with the renewal of your business license.",
    },
    {
      question: "How much does it cost to register a trademark in the UAE?",
      answer:
        "The cost of trademark registration depends on the specific services required, such as legal or translation support. Contact <span style='color: red;'>ALTRASUL</span> for a personalized quote based on your needs.",
    },
    {
      question: "Can I trademark a slogan or name?",
      answer:
        "Yes, you can trademark a slogan or name if it meets the UAE trademark requirements and is unique. <span style='color: red;'>ALTRASUL</span> can assist you with the process to protect your slogan or name effectively.",
    },
    {
      question: "What symbols or marks cannot be registered as trademarks in the UAE?",
      answer:
        "Trademarks that violate public morals, feature religious symbols, or include government emblems cannot be registered in the UAE.",
    },
    {
      question: "Can I file a single trademark application for all GCC countries?",
      answer:
        "No, each GCC country requires a separate trademark application. However, <span style='color: red;'>ALTRASUL</span> offers expert guidance to help you navigate trademark registration across multiple jurisdictions.",
    },
    {
      question: "How can <span style='color: red;'>ALTRASUL</span> assist with trademark registration in Dubai?",
      answer:
        "At <span style='color: red;'>ALTRASUL</span>, we provide comprehensive trademark registration services in Dubai, from initial consultation to final approval. Our team ensures a smooth and efficient process to protect your brand in the UAE.",
    },
  ];
  
  const cardData = [
    {
      id: 1,
      title: "For Employment Purposes",
      description:
        "When relocating to the UAE for work, legal document verification is essential. Employers often require educational certificate attestation to validate qualifications. For example, apostille services in the UAE can help verify degrees and diplomas internationally.",
    },
    {
      id: 2,
      title: "For Residency and Family Visa Applications",
      description:
        "Documents like birth and marriage certificates need attestation to prove family relationships. Marriage certificate attestation in Dubai and birth certificate attestation in the UAE are necessary to apply for residency visas for spouses and children.",
    },
    {
      id: 3,
      title: "For Education Purposes",
      description:
        "If you plan to study in the UAE or abroad, educational certificates must undergo attestation. This ensures that your qualifications are recognized, enabling you to enroll in educational institutions.",
    },
    {
      id: 4,
      title: "For Legal Matters",
      description:
        "Attestation of legal documents, such as power of attorney and affidavits, is often required for legal transactions or court cases within the UAE. Legal document verification provides credibility and ensures the authenticity of such documents.",
    },
  ];
  
  

  const whatWeDoRef = useRef(null);

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  return (
    <>
      <FirstServiceSection
        data={FirstSectionservice[0]}
        onLearnMore={scrollToWhatWeDo}
      />
      <SecondSectionService data={Secondserviceone[0]} />
      <div className="flex flex-col mt-8 justify-center items-center">
        <h1 className="text-4xl text-center bona-nova-sc-bold sm:m-5">
          Types of Certificates for Attestation
        </h1>
      </div>
      <div ref={whatWeDoRef}>
        <Whatwedo data={Servicedesc} />
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 pt-5">
          Why Choose <span className="text-red-600">ALTRASUL</span> for Certificate Attestation
        </h1>
        <p className="mx-20 text-center py-2">
          When it comes to dependable and efficient certificate attestation
          services in the UAE, <span className="text-red-600">ALTRASUL</span> is a trusted name. Our expert team
          ensures a hassle-free process for legal document verification,
          adhering to all UAE regulatory requirements.
        </p>
        <p className="mx-20 text-center py-2">
          At <span className="text-red-600">ALTRASUL</span>, we recognize the importance of cost-effectiveness. That’s
          why we provide competitive pricing without compromising the quality of
          our services.
        </p>
        <p className="mx-20 text-center py-2">
          Our dedication to excellence makes us one of the leading certificate
          attestation providers in the UAE. With quick turnarounds and
          transparent communication, we aim to make your certificate attestation
          process in Dubai seamless, efficient, and budget-friendly.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl bona-nova-sc-bold text-red-600 pt-5">
          Step-by-Step Certificate Attestation Process at <span className="text-red-600">ALTRASUL</span>
        </h1>

        <Whatwedo data={Servicedesc1} />
      </div>
      <HoverCard data={cardData} />
    </>
  );
};

export default Certification;
