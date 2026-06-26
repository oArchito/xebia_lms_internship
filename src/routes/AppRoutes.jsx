import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Landing from '../pages/Landing';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

/**
 * Platform Routes Definition
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Persistent Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Standalone Pages */}
      <Route path="/login" element={<Login />} />

      {/* Fallback route - redirect to home */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
};

export default AppRoutes;
//
