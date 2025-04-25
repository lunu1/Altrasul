import { motion } from "framer-motion";


const HoverCard = ({data}) => {
  return (
    <div className="flex flex-wrap items-center justify-center px-4">
      {data.map((card) => (
        <motion.div
          key={card.id}
          className="relative bg-red-600 text-white w-full md:w-2/5 m-4 rounded-lg overflow-hidden shadow-lg cursor-pointer min-h-[25vh]"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="p-8">
            <h2 dangerouslySetInnerHTML={{ __html: card.title }} className="text-xl font-bold"/>
            <p dangerouslySetInnerHTML={{ __html: card.description }} className="mt-2 text-sm"/>
          </div>
          <motion.div
            className="absolute bottom-4 right-4 bg-white text-red-600 p-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.2, rotate:360}}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3h16.5M4.5 6h15M6.75 9h10.5M3.75 12h16.5M4.5 15h15M6.75 18h10.5"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HoverCard;
