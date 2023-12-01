import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '~/components/Navbar';
import Aside from '../Blog/components/Aside';

const ProfileFeature = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <Outlet />
    </div>
  );
};

export default ProfileFeature;
