import React from "react";

    function Header() {
      return (
        <header id="header">
          <h2 id="site-name">
            <a href="/">Pixelate</a>
          </h2>
          <nav>
            <ul id="navbar" className="navbar">
              <li className="nav-item">
                <a href="#sec-about">About BRICKMMO</a>
              </li>
              <li className="nav-item">
                <a href="#sec-purchase">Buy LEGO</a>
              </li>
              <li className="nav-item">
                <a href="#sec-socmed"><i class="fa-brands fa-twitter"></i> </a>
              </li>
              <li className="nav-item">
                <a href="#sec-socmed"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li className="nav-item">
                <a href="#sec-socmed"><i class="fa-brands fa-tiktok"></i></a>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
    

export default Header;