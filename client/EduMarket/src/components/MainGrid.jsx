import React from 'react';
import { HiDocumentText } from 'react-icons/hi';

const Maingrid = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-2xl font-bold mb-8">Select Your Semester</h1>
      <div className="flex space-x-6">
        <div className="w-60 h-40 bg-violet-500 hover:bg-white hover:border border-violet-600 text-white p-4 rounded-md text-center justify-center items-center">
          <HiDocumentText size={72}/>
        </div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">2</div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">3</div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">4</div>
      </div>
      <div className="flex space-x-6 mt-4">
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">5</div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">6</div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">7</div>
        <div className="w-60 h-40 bg-blue-700 text-white p-4 rounded-md">8</div>
      </div>
    </div>
  );
};

export default Maingrid;
