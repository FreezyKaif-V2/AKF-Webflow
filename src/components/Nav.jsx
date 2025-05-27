import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav accent-primary-nav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon"></div>
            <div className="text-xl font-semibold">AK Furniture</div>
          </a>
        </div>
        
        <div className="nav-center">
          <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
            <ul className="nav-menu-list">
              <li className="nav-menu-list-item">
                <div className="nav-menu-dropdown">
                  <div className="nav-link nav-link-on-accent-primary">
                    <div>Sofas</div>
                    <div className="nav-caret"></div>
                  </div>
                </div>
              </li>
              <li className="nav-menu-list-item">
                <div className="nav-menu-dropdown">
                  <div className="nav-link nav-link-on-accent-primary">
                    <div>Help</div>
                    <div className="nav-caret"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-right">
          <div className="icon-wrapper">
            <a href="https://maps.app.goo.gl/Sevx8DdfeG2UWn1J8" className="call-button-copy"></a>
            <a href="tel:+917809817833" className="call-button"></a>
          </div>
        </div>

        <button 
          className="nav-mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="icon icon-on-accent-primary">
            <span className="sr-only">Menu</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Nav;