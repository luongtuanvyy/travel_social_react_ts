import { Outlet } from 'react-router-dom';
import Navbar from '~/components/Navbar';

const LayoutCompany = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutCompany;
