/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Swing from "react-reveal/Swing";
import Bounce from "react-reveal/Bounce";
import { FaLifeRing } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";
import { GiDiamondRing, GiCrystalEarrings, GiGemPendant } from "react-icons/gi";

export default class Home extends Component {
  render() {
    const handleScroll = () => {
      if (window.scrollY > 670) {
        document.getElementById("homeBackground").classList.add("d-none");
      } else {
        document.getElementById("homeBackground").classList.remove("d-none");
      }
    };
    window.addEventListener("scroll", handleScroll);

    const data = this.props.data.filter(
      (category) => category.featured === true
    );
    const products = data.slice(0, 4).map((product) => {
      return (
        <Fade bottom>
          <div
            className="card col-md-3 mt-2 p-0 categoryCard overflow-hidden"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <div className="card-body p-0">
              <h5 className="featured">Featured</h5>
              <div className="overflow-hidden">
              <img
                className="img-fluid cardImage"
                src={product.image}
              />
              </div>
              <h4 className="mt-2" style={{ color: "white" }}>
                {product.name}
              </h4>
              <div className="text-white justify-content-center d-flex"><h5 className="me-2">Rs. {product.price}</h5><del>Rs. {product.oldPrice}</del></div>
              <a href={`/productDetail/${product.orderID}`}>
                <Button className="btn-gene">Order Now</Button>
              </a>
            </div>
          </div>
        </Fade>
      );
    });
    return (
      <div className="overflow-hidden">
        <video autoPlay muted loop id="homeMidBackground">
          <source src="assets/vid/midBackground.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop id="homeBackground">
          <source src="assets/vid/background.mp4" type="video/mp4" />
        </video>
        <Fade left>
          <div
            className="col-md-4 homeText"
          >
            <h4 style={{ color: "white" }}>Welcome to our store</h4>
            <p style={{ color: "white", fontSize: "60px", marginTop: "-20px" }}>
              Fall in love with
            </p>
            <h1
              style={{ color: "white", fontSize: "60px", marginTop: "-40px" }}
            >
              <b>Amazing Designs</b>
            </h1>
            <p style={{ color: "white" }}>
              From the latest trends to timeless classics, we offer a diverse
              range that caters to your unique preferences and needs.
            </p>
          </div>
        </Fade>
        <div className="mt-5 bg-dark text-white py-3 justify-content-center">
          <Flip>
            <img
              className="mb-3 p-2"
              id="logo"
              src="assets/img/jewellery.png"
              width={100}
            />
          </Flip>
          <Bounce top>
            <p
              className="col-md-8 mx-auto"
              style={{ fontSize: "25px", fontWeight: "100" }}
            >
              As a brand, we are passionate about sourcing the finest materials,
              from ethically to high-quality precious metals. Sustainability and
              responsible practices are at the heart of our values, ensuring
              that our jewelry not only looks beautiful but also carries a
              meaningful story behind it.
            </p>
          </Bounce>
          <hr className="col-md-8 mx-auto mt-5" />
          <div
            className="justify-content-center row mx-auto mb-5"
            style={{ marginTop: "-20px" }}
          >
            <div className="col-md-2">
              <GiGemPendant className="fontawesome" />
            </div>
            <div className="col-md-2">
              <GiDiamondRing className="fontawesome" />
            </div>
            <div className="col-md-2">
              <BsBraces className="fontawesome" />
            </div>
            <div className="col-md-2">
              <GiCrystalEarrings className="fontawesome" />
            </div>
            <div className="col-md-2">
              <FaLifeRing className="fontawesome" />
            </div>
          </div>
          <div className="justify-content-center row mx-auto mb-5">
            <Swing>
              <div className="card col-md-2 mt-2 productCard">
                <a style={{ textDecoration: "none" }} href="/category/pendants">
                  <div className="card-body">
                    <img
                      src="assets/img/jewellery.png"
                      width={150}
                      style={{ opacity: "0.2" }}
                    />
                    <h1 style={{ marginTop: "-90px", color: "white" }}>
                      Pendants
                    </h1>
                  </div>
                </a>
              </div>
              <div className="card col-md-2 mt-2 productCard">
                <a style={{ textDecoration: "none" }} href="/category/rings">
                  <div className="card-body">
                    <img
                      src="assets/img/jewellery.png"
                      width={150}
                      style={{ opacity: "0.2" }}
                    />
                    <h1 style={{ marginTop: "-90px", color: "white" }}>
                      Rings
                    </h1>
                  </div>
                </a>
              </div>
              <div className="card col-md-2 mt-2 productCard">
                <a
                  style={{ textDecoration: "none" }}
                  href="/category/bracelets"
                >
                  <div className="card-body">
                    <img
                      src="assets/img/jewellery.png"
                      width={150}
                      style={{ opacity: "0.2" }}
                    />
                    <h1 style={{ marginTop: "-90px", color: "white" }}>
                      Bracelets
                    </h1>
                  </div>
                </a>
              </div>
              <div className="card col-md-2 mt-2 productCard">
                <a style={{ textDecoration: "none" }} href="/category/earrings">
                  <div className="card-body">
                    <img
                      src="assets/img/jewellery.png"
                      width={150}
                      style={{ opacity: "0.2" }}
                    />
                    <h1 style={{ marginTop: "-90px", color: "white" }}>
                      Earrings
                    </h1>
                  </div>
                </a>
              </div>
              <div className="card col-md-2 mt-2 productCard">
                <a style={{ textDecoration: "none" }} href="/category/kara">
                  <div className="card-body">
                    <img
                      src="assets/img/jewellery.png"
                      width={150}
                      style={{ opacity: "0.2" }}
                    />
                    <h1 style={{ marginTop: "-90px", color: "white" }}>Kara</h1>
                  </div>
                </a>
              </div>
            </Swing>
          </div>
        </div>
        <div className="d-none d-md-block" style={{ minHeight: "30rem", background: "transparent" }}></div>
        <div className="bg-dark text-white py-5 justify-content-center">
          <Fade top>
            <h1 className="mt-5" style={{ fontSize: "50px", opacity: "" }}>
              FEATURED PRODUCTS
            </h1>
          </Fade>
          <div className="col-md-10 mx-auto">
            <div className="row justify-content-center">{products}</div>
          </div>
        </div>
      </div>
    );
  }
}
