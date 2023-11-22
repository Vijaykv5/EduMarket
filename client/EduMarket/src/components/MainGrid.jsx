import React from 'react';
import { HiDocumentText } from 'react-icons/hi';

const Maingrid = () => {
  const boxStyles =
    'w-full sm:w-60 h-40  text-white p-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center';

  const iconStyles =
    'text-black transition-all duration-300 transform scale-125 hover:scale-150';

  const headingStyles =
    'text-3xl sm:text-5xl  mt-6 font-bold text-center mb-8';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className={headingStyles}>Select Your Semester</h1>
      <div className="flex flex-wrap justify-center gap-4">
      
        {[1,2, 3, 4, 5, 6, 7, 8].map((number) => (
          <div
            key={number}
            className={`${boxStyles} bg-black hover:bg-white text-5xl  hover:text-black`}
          >
            S{number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maingrid;
