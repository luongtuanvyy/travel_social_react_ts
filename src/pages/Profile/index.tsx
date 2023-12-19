import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '~/components/Navbar';
import Aside from '../Blog/components/Aside';
import { initFlowbite } from 'flowbite';

const ProfileFeature = () => {
  initFlowbite();
  return (
    <div>
      <Navbar />
      <Aside />
      <Outlet />
    </div>
  );
};

export default ProfileFeature;
