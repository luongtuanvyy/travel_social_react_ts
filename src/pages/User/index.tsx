import { ReactNode } from 'react';
import Navbar from '~/components/Navbar';

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default UserLayout;
