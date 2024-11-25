import microsoft from "../assets/images/microsoftlogo.png";
import Lenovo from "../assets/images/LenovoLogo.png";
import Bitdefender from "../assets/images/bitdefenderr.png";
import HpLogo from "../assets/images/hpLogo.png";
import acronisLogo from "../assets/images/acronisLogo.png";
// import DellLogo from "../assets/images/DellLogo.png";
// import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: microsoft, alt: "Microsoft Logo" },
  { src: Lenovo, alt: "Lenovo Logo" },
  { src: HpLogo, alt: "Hp Logo" },
  { src: Bitdefender, alt: "Bitdefender Logo" },
  { src: acronisLogo, alt: "Acronis Logo" },
  //   { src: DellLogo, alt: "Dell Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="text-white py-[72px] sm:py-24 flex items-center justify-center">
      <div className="container">
        <h2 className="text-xl text-white/72 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-[#4d5eb3] ">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-gradient-to-r from-white to-transparent after:bg-gradient-to-l from-black to-transparent">
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            
              {images.map(({ src, alt }, index) => (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className="flex-none h-32 w-auto border-2  px-10 py-10"
                />
              ))}
               {images.map(({ src, alt }, index) => (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className="flex-none h-32 w-auto border-2  px-10 py-10"
                />
              ))} {images.map(({ src, alt }, index) => (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className="flex-none h-32 w-auto border-2  px-10 py-10"
                />
              ))}
            

            {/* {images.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-20 w-auto"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-20 w-auto"
              />
            ))} */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
