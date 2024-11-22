import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "../styles/home.scss";
import Homebg1 from "../assets/images/Home1.jpg";
import Homebg2 from "../assets/images/Home2.jpg";
import Homebg3 from "../assets/images/Home3.jpg";
import Navbar from "../components/Navbar";

const textAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const backgrounds = [
  { image: Homebg1, heading: "EXCLUSIVE STYLE FOR YOU" },
  { image: Homebg2, heading: "CUSTOM MADE ELEGANCE" },
  { image: Homebg3, heading: "EMBRACE LUXURY" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex} 
        class="h-[calc(100vh-7rem)] bg-cover"
        style={{ backgroundImage: `url(${backgrounds[currentIndex].image})` }}
        initial={{ backgroundSize: "120%" }}
        animate={{ backgroundSize: "100%" }}
        transition={{ duration: 2 }}
      >
        <div >
          <motion.h1
            className="text-6xl text-center relative top-52 text-red-600 font-bold"
            key={currentIndex} // Triggers reanimation on text change
            initial="hidden"
            animate="visible"
            // exit="hidden"
            transition={{ duration: 1, delay: 0.5 }}
            variants={textAnimation}
          >
            {backgrounds[currentIndex].heading}
          </motion.h1>
          <motion.p
          className="text-3xl text-center relative top-56 text-white"
            initial="hidden"
            animate="visible"
            // exit="hidden"
            transition={{ duration: 1, delay: 1 }}
            variants={textAnimation}
          >
            WELCOME TO THE WORLD OF LUXURY BLAH BLAH BLAH
          </motion.p>
        </div>

        {/* Indicator dots */}
        <div className="slider-dots">
          {backgrounds.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
