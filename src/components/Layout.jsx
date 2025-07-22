import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';


export default function Layout() {

  


  return (
    <div className="flex flex-col min-h-screen">
      <Header />


      <main className="flex-1 px-4 py-6">{/* child pages go here */}<Outlet /></main>
      <Footer />
    </div>
  );
}
