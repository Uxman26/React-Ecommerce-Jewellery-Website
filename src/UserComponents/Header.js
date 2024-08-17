/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect  } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Fade,
} from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropDown = () => setIsDropdownOpen(!isDropdownOpen);

  const onMouseEnter = () => setIsDropdownOpen(true);

  const onMouseLeave = () => setIsDropdownOpen(false);

  const handleScroll = () => {
    
    if (window.scrollY < 660 && window.scrollY > 30) {
      document.getElementById('header').classList.add('navbarUp');
    } else{
      document.getElementById('header').classList.remove('navbarUp');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="container-fluid dynamicNavbar" id="header" style={{backgroundColor: 'rgb(19, 19, 19)'}}>
      <Navbar expand={"md"} dark color="">
        <NavbarBrand href="/" className="ms-5 p-0 m-0">
          <img
            className="p-1"
            src="/assets/img/logo.png"
            width={50}
            id="logo"
          ></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto me-5" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Story</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown
                onMouseOver={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isOpen={isDropdownOpen}
                toggle={toggleDropDown}
              >
                <DropdownToggle caret>Products</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/category/pendants">
                    Pendants
                  </DropdownItem>
                  <DropdownItem href="/category/rings">Rings</DropdownItem>
                  <DropdownItem href="/category/bracelets">
                    Bracelets
                  </DropdownItem>
                  <DropdownItem href="/category/earrings">
                    Earrings
                  </DropdownItem>
                  <DropdownItem href="/category/kara">Kara</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
