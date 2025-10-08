import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-6 mt-8">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} ALX Movie App</div>
    </footer>
  );
};

export default Footer;