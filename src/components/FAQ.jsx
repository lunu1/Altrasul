"use client";
// import PlusIcon from "../assets/icons/plus.svg";
// import MinusIcon from "../assets/icons/minus.svg";
import {Minus} from "../assets/icons/Icons";
import { Plus } from "../assets/icons/Icons";
import clsx from "clsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "How long does it take to set up a business in Dubai?",
    answer:
      "The time required to set up a business in Dubai depends on the type of business setup you choose. Mainland businesses can typically be established within 2-3 weeks, while free zone setups might take 3-4 weeks. Offshore company formation usually takes around 1-2 weeks. VISANDBIZ expedites the process by handling all the paperwork and liaising with authorities on your behalf.",
  },
  {
    question: "What is the cost of setting up a company in Dubai?",
    answer:
      "The cost of setting up a company in Dubai varies based on several factors, including the type of business activity, the location (mainland, free zone, or offshore), and the number of visas required. To get the exact cost of setting up your business in Dubai, contact us for a free consultation; we have a transparent pricing structure that gives you the best value and fast business setup.",
  },
  {
    question: "What documents are required for business setup in Dubai?",
    answer:
      "The documents required depend on the type of setup and the business activity. Typically, you’ll need: ● Passport copies of shareholders and directors ● Proof of residence (utility bill, etc.) ● Proposed company name(s) ● Business plan (for certain activities) ● Memorandum of Association (MOA) VISANDBIZ helps in gathering and preparing all necessary documents, making the process smooth and stress-free.",
  },
  {
    question: "Can foreigners own 100% of a company in Dubai?",
    answer:
      "Yes, foreigners can own 100% of their company in Dubai, especially if it’s set up in a free zone. Recent reforms also allow 100% foreign ownership in certain mainland business activities. VISANDBIZ provides expert advice on the best ownership structure for your business, ensuring you maximize the benefits of Dubai’s business-friendly environment.",
  },
  
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <Minus /> : <Plus />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx("mt-4", {
              hidden: !isOpen,
              "": isOpen === true,
            })}
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = ({data}) => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-red-600 to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-5xl max-w-[648px] sm:mx-auto  font-bold tracking-tighter">
          Frequency asked questions
        </h2>
      </div>
      <div className="mt-12 max-w-[648px] sm:mx-auto mx-2">
        {data.map(({ question, answer }, index) => (
          <div key={index}>
            <AccordionItem question={question} answer={answer} />
          </div>
        ))}
      </div>
    </div>
  );
};
