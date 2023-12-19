import { initFlowbite } from 'flowbite';
import { Outlet } from 'react-router-dom';
import Navbar from '~/components/Navbar';
import Aside from '../Blog/components/Aside';

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
