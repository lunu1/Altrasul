import { motion } from "framer-motion";

export const SecondSectionService = ({ data }) => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 1 }}
  className="flex items-center justify-center p-8 py-16"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, black, red),
      linear-gradient(to right, #ff0000, #ff4d4d, #ff9999)
    `,
    backgroundBlendMode: "multiply",
  }}
>
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex-1 p-8 text-gray-800">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-4xl font-bold mb-4"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-md leading-relaxed mb-6"
          >
            {data.decs1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm sm:text-md leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.decs2 }}
          >
          {/* {data.decs2} */}
          </motion.p>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex-1 bg-cover bg-center relative"
          style={{
            backgroundImage:
              `url(${data.image})`
              ,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

