/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Col, Label, Row } from "reactstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(val);
class componentName extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
    let result = fetch("http://localhost:8000/register", {
      method: "post",
      body: JSON.stringify(values), 
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
  }

  render() {
    return (
      <div>
        <hr
          className="pt-5 mt-0 mb-0 bg-dark"
          style={{ borderBottom: "2px solid white" }}
        />
        <div className="bg-dark  text-white py-5">
          <div className=" mt-5 col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-7">
                <Fade left>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group mb-2">
                      <Label htmlFor="firstname" md={2}>
                        First Name
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".firstname"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(15),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".firstname"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Label htmlFor="lastname" md={2}>
                        Last Name
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".lastname"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(15),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".lastname"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Label htmlFor="telnum" md={2}>
                        Contact Tel.
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".telnum"
                          id="telnum"
                          name="telnum"
                          placeholder="Tel. Number"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(15),
                            isNumber,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".telnum"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 2 numbers",
                            maxLength: "Must be 15 numbers or less",
                            isNumber: "Must be a number",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Label htmlFor="email" md={2}>
                        Email
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          validators={{
                            required,
                            validEmail,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".email"
                          show="touched"
                          messages={{
                            required: "Required",
                            validEmail: "Invalid Email Address",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Col md={{ size: 6, offset: 2 }}>
                        <div className="form-check">
                          <Label check>
                            <Control.checkbox
                              model=".agree"
                              name="agree"
                              className="form-check-input"
                            />{" "}
                            <strong>May we contact you?</strong>
                          </Label>
                        </div>
                      </Col>
                      <Col md={{ size: 3, offset: 1 }}>
                        <Control.select
                          model=".contactType"
                          name="contactType"
                          className="form-control"
                        >
                          <option>Tel.</option>
                          <option>Email</option>
                        </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Label htmlFor="message" md={2}>
                        Your Feedback
                      </Label>
                      <Col md={10}>
                        <Control.textarea
                          model=".message"
                          id="message"
                          name="message"
                          rows="12"
                          className="form-control"
                        />
                      </Col>
                    </Row>
                    <Row className="form-group mb-2">
                      <Col md={{ size: 10, offset: 2 }}>
                        <Button type="submit" className="btn-feedback">
                          Send Feedback
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </Fade>
              </div>
              <Bounce top>
                <div
                  className="col-md-5"
                  style={{ textAlign: "left", fontSize: "20px" }}
                >
                  <h1>Get in Touch</h1>
                  Welcome to our Contact Us page! We're thrilled that you want
                  to connect with us. Whether you have questions, feedback,
                  suggestions, or just want to say hello, this is the place to
                  do it. Your voice matters to us, and we're here to listen.
                  <br />
                  Do you have a burning question about our products or services?
                  Need assistance with an order? Have an idea you think we
                  should explore? Whatever it is, we're all ears. Feel free to
                  reach out using the form below, and we'll get back to you as
                  soon as possible.
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
