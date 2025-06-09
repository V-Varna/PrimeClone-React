import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-6 mt-10 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} PrimeClone. All rights reserved.</p>
        <p>
          Built for learning purposes. Data powered by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            TMDb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
