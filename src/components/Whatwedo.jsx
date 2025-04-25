
export const Whatwedo = ({ data }) => {
    return(
        <>
        <div className="my-8">
      <div className="flex flex-col items-center">
       {/* <div > */}
        {data.map((item, index) => (
        <div key={index} className="flex items-center text-xs sm:text-base w-[95vw] sm:w-[80vw] mt-10">
          <div className="">
          <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full m-1 sm:m-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
          </div>
     
        <div className="">
        <h1 className="text-xl font-bold">
          {item.title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: item.desc }} />
        </div>
      
        </div>

       ))}
      <div>
       </div>
       </div>
      </div>
        </>
    )
}