import React from 'react';
import Header from './Header/Header';
// import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const PublicLayout = () => {
  return (
    <div className="main-layout">
      <Header />
        <main>
        <Outlet /> {/* Nested child routes render here */}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
