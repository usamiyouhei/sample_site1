import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__inner">
          <h1 className="header__logo">System Kitchen</h1>
          <nav className="header__nav">
            <ul className="header__items">
              <li className="header__item">
                <a href="#vision" className="header__link">
                  Vision
                </a>
              </li>
              <li className="header__item">
                <a href="#service" className="header__link">
                  Service
                </a>
              </li>
              <li className="header__item">
                <a href="#news" className="header__link">
                  News
                </a>
              </li>
            </ul>
          </nav>
          <a href="#contact" className="header__contact contact__button">
            Contact
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
