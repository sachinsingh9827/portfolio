import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center py-6 mt-auto font-montserrat">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-gray-400">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
