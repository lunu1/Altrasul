import microsoft from "../assets/images/altraas.png";
import Lenovo from "../assets/images/amer.png";
import Bitdefender from "../assets/images/bird.png";
import HpLogo from "../assets/images/dubait.jpeg";
import acronisLogo from "../assets/images/tasheel.png";
import Almost from "../assets/images/tawjeel.png";
import setooppp from "../assets/images/Untitled.jpg";
import logoalt from "../assets/images/logoalt.jpeg";
import setoop from "../assets/images/setoop.jpeg";

import Alogo from "../assets/images/Alogo1.png";
import Alogo1 from "../assets/images/Alogo.webp";
import Alogo2 from "../assets/images/Alogo2.webp";
import Alogo3 from "../assets/images/Alogo3.webp";
import Alogo4 from "../assets/images/Alogo4.webp";
import Alogo5 from "../assets/images/Alogo5.webp";
import Alogo6 from "../assets/images/Alogo6.webp";
import Alogo7 from "../assets/images/Alogo7.png";
import Alogo8 from "../assets/images/Alogo8.webp";
import Alogo9 from "../assets/images/Alogo9.webp";

import { motion } from "framer-motion";

const images = [
  { src: microsoft, alt: " Logo" },
  { src: logoalt, alt: " Logo" },
  { src: Lenovo, alt: " Logo" },
  { src: setoop, alt: " Logo" },
  { src: HpLogo, alt: " Logo" },
  { src: Bitdefender, alt: " Logo" },
  { src: acronisLogo, alt: " Logo" },
  { src: Almost, alt: "Al Mostashar Al Fanei Decor Logo" },
  { src: setooppp, alt: " Logo" },
  { src: Alogo, alt: "logo" },
  { src: Alogo1, alt: "logo" },
  { src: Alogo2, alt: "logo" },
  { src: Alogo3, alt: "logo" },
  { src: Alogo4, alt: "logo" },
  { src: Alogo5, alt: "logo" },
  { src: Alogo6, alt: "logo" },
  { src: Alogo7, alt: "logo" },
  { src: Alogo8, alt: "logo" },
  { src: Alogo9, alt: "logo" },
];

export const LogoTicker = () => {
  const handleScroll = (direction) => {
    const container = document.querySelector(".logo-container");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Check if at the end or start and loop
      if (direction === "right" && container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "left" && container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="text-white py-[72px] sm:py-24 flex items-center justify-center">
      <div className="container">
        <h2 className="text-xl text-white/72 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-[#4d5eb3] ">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative flex items-center">
          <button
            className="absolute left-0 z-10 bg-blue-400 text-black p-2 rounded-full"
            onClick={() => handleScroll("left")}
          >
            &#9664;
          </button>
          <div className="logo-container flex gap-8 w-full overflow-x-scroll no-scrollbar">
            {images.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-24 w-auto sm:h-32 border px-4 py-4"
              />
            ))}
          </div>
          <button
            className="absolute right-0 z-10 bg-blue-400 text-black p-2 rounded-full"
            onClick={() => handleScroll("right")}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};
