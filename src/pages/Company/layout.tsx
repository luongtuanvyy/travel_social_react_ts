import React from 'react';
import Navbar from '~/components/Navbar';
import TourCompany from './TourCompany';
import { Outlet } from 'react-router-dom';

const LayoutCompany = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutCompany;
