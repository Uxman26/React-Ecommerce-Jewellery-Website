import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";

export default class About extends Component {
  render() {
    return (
      <div className="overflow-hidden text-start">
        <video autoPlay muted loop id="homeBackground">
          <source src="assets/vid/background.mp4" type="video/mp4" />
        </video>
        <div className="row" style={{marginTop:'100px', marginBottom:'50px'}}>
          <div
            className="col-md-8 ps-5 mx-auto py-5"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.779)",
              color: "white",
              border: "2px solid",
            }}
          >
            <Bounce bottom>
              <h4 className="col-md-8 mx-auto text-center">
                Welcome to our Jewellery Hub! We are passionate about providing
                exquisite and timeless pieces that celebrate life's most
                cherished moments.<br/> Here is a glimpse into our story:
              </h4>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Our Journey:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                Established in 1986, our journey began with a vision to create a
                place where beauty, elegance, and craftsmanship meet to offer
                our customers an unparalleled shopping experience. From the very
                beginning, we set out to curate a stunning collection of jewelry
                that reflects the individuality and style of each person who
                walks through our doors.
              </p>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Our Commitment to Quality:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                Quality is at the core of everything we do. We take immense
                pride in sourcing only the finest materials, including precious
                metals and gemstones, to create stunning pieces that will be
                treasured for generations. Each piece of jewelry is meticulously
                crafted by skilled artisans who pour their passion and expertise
                into every detail.
              </p>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Customer Experience:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                We believe that jewelry is not just an accessory but a symbol of
                love, commitment, and personal expression. Our knowledgeable and
                friendly team is dedicated to helping you find the perfect piece
                that resonates with your unique story and style. We strive to
                create an environment where you feel comfortable and inspired to
                explore our wide range of collections.
              </p>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Collections:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                Our jewelry collections cater to various tastes and occasions.
                Whether you're looking for a dazzling engagement ring, a
                timeless wedding band, a thoughtful gift for a loved one, or a
                treat for yourself, you'll find an extensive selection to choose
                from.
              </p>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Customization:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                We understand that every customer is unique, and sometimes, you
                need something truly one-of-a-kind. That's why we offer
                personalized jewelry design services. Our skilled designers work
                closely with you to bring your vision to life, creating a piece
                that perfectly captures your sentiments and preferences.
              </p>
              <h2 className="mt-5" style={{ color: "#ffd700" }}>
                Community Involvement:
              </h2>
              <p
                className="col-md-12 mx-auto"
                style={{ fontSize: "20px", fontWeight: "100" }}
              >
                As a responsible and community-oriented business, we believe in
                giving back to society. We actively participate in charitable
                initiatives and support causes that are close to our hearts. By
                choosing our jewelry, you become a part of this positive impact.
              </p>
            </Bounce>
          </div>
        </div>
      </div>
    );
  }
}
