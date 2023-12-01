import { Sidebar } from 'flowbite-react';
import React from 'react';
import Navbar from '~/components/Admin/Navbar';
import SidebarAdmin from '~/components/Admin/SidebarAdmin';
import Content from './components/Content';

const DashboardAdmin = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <SidebarAdmin />
      <Content/>
      <div className="bg-black grow h-full">SCO</div>
    </div>
  );
};

export default DashboardAdmin;
