/* eslint-disable react/prop-types */

export const FirstServiceSection = ({ data, onLearnMore }) => {
  return (
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-16 bg-white mt-24">
        {/* Left Image Section */}
        <div className="w-[90vw] h-auto sm:w-[40vw]">
          <img
            src={data.image}
            alt="Service"
            className="sm:w-[40vw] h-auto rounded-lg shadow-lg "
          />
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
          <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
          <h2 className="text-xl text-red-500 font-semibold mt-4">{data.subtitle}</h2>
          <p className="text-gray-600 mt-4" dangerouslySetInnerHTML={{ __html: data.description }} />
          <button 
          onClick={onLearnMore}
          className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-md shadow hover:bg-red-600">
            Learn More
          </button>
        </div>
      </div>
    );
  };
