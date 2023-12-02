import React from 'react';
import Navbar from '~/components/Navbar';
import TourCompany from './TourCompany';

const LayoutCompany = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[76px]">
        <TourCompany />
      </div>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-500/50 z-50'>
        <div className='w-1/2 bg-white h-full ml-auto'></div>
      </div>
    </div>
  );
};

export default LayoutCompany;
