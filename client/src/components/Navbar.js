import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Projects</a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">Tasks</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
