/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
function Footer(props) {
  return (
    <div id="footer" className="container-fluid">
        <div className="row col-md-11 mx-auto text-center justify-content-center pt-5">
          <div className="col-md-3 text-start text-light">
            Find us at our whatsapp or explore our online store, where our
            dedicated team is ready to assist you in making your dreams come
            true. Remember, at SH Jewels, it's not just jewelry – it's a
            celebration of your unique beauty and the moments that truly matter.
          </div>
          <div className="col-md-1 justify-content-end text-end"><div className="vl1"></div></div>
          <div className="col-md-4 justify-content-center text-start text-light d-flex">
            <Fade left>
              <Navbar className="pt-0" expand={"xs"} dark color="">
                <Nav className="" navbar style={{ flexDirection: "column" }}>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">Story</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contactus">Contact Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/category/pendants">Pendants</NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
              <Navbar className="pt-0" expand={"xs"} dark color="">
                <Nav className="" navbar style={{ flexDirection: "column" }}>
                  <NavItem>
                    <NavLink href="/category/rings">Rings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/category/bracelets">Bracelets</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/category/earrings">Earrings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/category/kara">Kara</NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </Fade>
          </div>
          <div className="col-md-1 justify-content-center text-center text-light"><div className="vl2"></div></div>
          <div className="col-md-3 justify-content-center text-center text-light">
            <div>
              <h2>FOLLOW US</h2>
          <SocialIcon
              className="mx-2 "
              network="facebook"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              className="mx-2 "
              network="instagram"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              className="mx-2 "
              network="whatsapp"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              className="mx-2 "
              network="email"
              style={{ height: 25, width: 25 }}
            />
            </div>
          </div>
          </div>
          <div className="row text-center justify-content-center">
          <hr
            className="mt-0 mb-0 pt-2"
            style={{ borderBottom: "2px solid white" }}
          />
          <div className="col-md-12 my-2 text-white">
            Copyright © 2023 Jewellery By SH. All rights reserved.
          </div>
        </div>
      </div>
  );
}

export default Footer;
