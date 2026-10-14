import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* <Navbar /> */}

      {/* pt-32 ensures content starts below the floating navbar 
        flex-grow ensures footer stays at bottom if content is short 
      */}
      <main className="flex-grow mx-auto w-full">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
