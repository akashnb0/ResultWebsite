import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Type Results ❤️‍🔥",
    url: "https://script.google.com/a/~/macros/s/AKfycbzklsIFBIoSUU_WW8bXuxomyNs4MFZW0vNB-zSsRppveTQy13HOox7iaQLlpF7D5HnP/exec",
  },
  {
    display: "Home",
    url: "#home",
  },
  
  {
    display: "About",
    url: "#about",
  },
  

  {
    display: "COA Login",
    url: "https://sticoa.vercel.app",
  },
  {
    display: "COA Results",
    url: "https://script.google.com/a/~/macros/s/AKfycbymORzaMIcO9tgEn14ccLHX7dg2RsgWCG8AsKKdV-wZ99Bf43Seh_b2n3_sOh3Nl1Ct/exec",
  },
  {
    display: "Type Login",
    url: "#mail",
  },
  
  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "Contact",
    url: "#contact",
  },
 
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Saraswathi Institute
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +91 8220093377
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
