// "use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Point from "../assets/icons/pointt.svg";

export const ServiceFeature = ({ title, description }) => {
  const border = useRef(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  // Create a mask image using radial gradient
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.left);
      offsetY.set(e.clientY - borderRect.top);
    };

    const borderElement = border.current;
    if (borderElement) {
      borderElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (borderElement) {
        borderElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [offsetX, offsetY]);

  return (
    <div
      ref={border}
      className="border border-white/30 text-center relative h-[300px] w-full flex items-center flex-col justify-center px-4 bg-black/90 hover:bg-black"
    >
      <motion.div
        className="absolute inset-0 border-4 border-red-600 "
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>

      <div
        className="inline-flex h-14 w-14 bg-white  justify-center items-center rounded-3xl"
        aria-label="Ecosystem Icon"
      >
        <img src={Point} alt="Ecosystem Icon" />
      </div>

      <h3 className="mt-6 font-bold text-red-600">{title}</h3>
      <p className="mt-2 text-white" dangerouslySetInnerHTML={{ __html: description }}/>
    </div>
  );
};

// export default Feature; 
