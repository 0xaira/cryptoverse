import React from 'react';

const Header = () => {
  return (
    <header className="header bg-slate-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        <a href="#" className="logo flex items-center">
          {/* <img src="./assets/images/logo.svg" width="32" height="32" alt="Cryptex logo" className="mr-2" /> */}
          Cryptex
        </a>

        <nav className="navbar">
          <ul className="navbar-list flex">
            <li className="navbar-item">
              <a href="#" className="navbar-link active">Homepage</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Buy Crypto</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Markets</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Sell Crypto</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Blog</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">BITUSDT</a>
            </li>
          </ul>
        </nav>

        <button className="nav-toggle-btn flex flex-col justify-between w-6 h-6 md:hidden" aria-label="Toggle menu">
          <span className="line bg-white"></span>
          <span className="line bg-white"></span>
          <span className="line bg-white"></span>
        </button>

        <a href="#" className="btn btn-outline">Wallet</a>

      </div>
    </header>
  );
};

export default Header;
