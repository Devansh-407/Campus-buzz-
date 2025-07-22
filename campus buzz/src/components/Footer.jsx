// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 text-sm text-gray-600">
      &copy; {new Date().getFullYear()} College Event Portal. All rights reserved.
    </footer>
  );
};

export default Footer;
