/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Category from "./Category";
import ProductDetail from "./ProductDetail";
import LoaderFile from "./LoaderFile";

const mapStateToProps = (state) => {
  return {
    data: state.products,
  };
};
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    var fadeTarget = document.getElementById("loaderID");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.01;
      } else {
        clearInterval(fadeEffect);
        fadeTarget.style.display = 'none';
      }
    }, 20);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div id="loaderID">
              <LoaderFile />
            </div>
            <div>
              <Routes>
                <Route path="/home" element={<Home data={this.props.data} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route
                  path="/category/:title"
                  element={<Category data={this.props.data} />}
                />
                <Route
                  path="/productDetail/:id"
                  element={<ProductDetail data={this.props.data} />}
                />
                <Route path="/" element={<Navigate replace to="/home" />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(mapStateToProps)(User);
