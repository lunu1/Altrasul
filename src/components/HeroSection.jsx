import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Homebg1 from "../assets/images/Home1.jpg";
import Homebg2 from "../assets/images/Home2.jpg";
import Homebg3 from "../assets/images/Hero.jpg";
import { useNavigate } from "react-router-dom";


const textAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const backgrounds = [
  {
    image: Homebg2,
    heading: "SIMPLIFY YOUR UAE BUSINESS SETUP WITH EXPERT GUIDANCE",
  },
  {
    image: Homebg1,
    heading: "GET SUPPORT FOR PRO SERVICES AND VISA APPLICATIONS",
  },
  { image: Homebg3, heading: "GROW YOUR BUSINESS WITH OUR EXPERTS" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();


  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-screen w-full relative overflow-hidden">
        <motion.img
          key={currentIndex}
          src={backgrounds[currentIndex].image}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="flex flex-col items-center space-y-6 relative top-[40vh] sm:top-[30vh] lg:top-[33vh] 2xl:top-[43vh] justify-center px-4">
          <motion.p
            className="text-sm sm:text-lg md:text-xl text-white text-center px-2"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            variants={textAnimation}
          >
            TRUST OUR EXPERTS TO NAVIGATE UAE REGULATION WITH EASE
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl text-red-600 bona-nova-sc-bold drop-shadow-md w-full sm:w-3/4 lg:w-2/3 text-center"
            key={currentIndex}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={textAnimation}
          >
            {backgrounds[currentIndex].heading}
          </motion.h1>
          <motion.div
            className="flex justify-center items-center mt-6 sm:mt-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 1, delay: 1 }}
            variants={textAnimation}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md"
            onClick={()=>navigate("/about")}
            >
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSection;
