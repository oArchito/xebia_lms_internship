import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

/**
 * Main Layout wrapper displaying Navbar, page content, and Footer
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-bg-base">
      {/* Navigation */}
      <Navbar />

      {/* Page Content Outlet */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
//
