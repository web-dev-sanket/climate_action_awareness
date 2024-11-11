import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">&copy; 2024 Climate Action Awareness</p>
      <div className="mt-2">
        <p className="text-xs">Empowering communities for a sustainable future</p>
      </div>
      <div className="mt-4">
        <a href="#top" className="text-blue-400 hover:underline">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
