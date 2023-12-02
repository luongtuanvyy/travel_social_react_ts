import { Outlet } from 'react-router-dom';
import Navbar from '~/components/Admin/Navbar';

const LayoutAdmin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
