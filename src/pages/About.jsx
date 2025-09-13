import React from "react";
import redstore1 from "../assets/redstore1.png";
import redstore2 from "../assets/redstore2.png";
import redstore3 from "../assets/redstore3.png";

const About = () => {
  return (
    <section className="bg-light py-5 min-vh-100">
      <div className="container">
        <h1 className="fw-bold text-center mb-4">About RedStore</h1>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="lead text-center">
              RedStore is your one-stop shop for the latest and greatest in
              sportswear, shoes, and accessories. Our mission is to empower your
              workout and lifestyle with quality products, modern designs, and
              unbeatable prices.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <h3 className="fw-semibold">Our Story</h3>
            <p>
              Founded in 2020, RedStore started with a passion for fitness and
              fashion. We believe everyone deserves to look and feel their best,
              whether at the gym, on the field, or out and about. Our curated
              selection is designed to inspire confidence and performance.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="fw-semibold">Our Values</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Quality:</strong> Only the best materials and brands.
              </li>
              <li>
                <strong>Customer First:</strong> Your satisfaction is our top
                priority.
              </li>
              <li>
                <strong>Innovation:</strong> Always bringing you the latest
                trends.
              </li>
              <li>
                <strong>Community:</strong> Supporting active lifestyles and
                local events.
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="fw-semibold mb-3">Meet Our Team</h3>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div
                className="card border-0 shadow-sm p-3"
                style={{ width: "180px" }}
              >
                <img
                  src={redstore2}
                  alt="Sean Parker"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-0">Sean Parker</h6>
                <small className="text-muted">Founder & CEO</small>
              </div>
              <div
                className="card border-0 shadow-sm p-3"
                style={{ width: "180px" }}
              >
                <img
                  src={redstore1}
                  alt="Mike Smith"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-0">Mike Smith</h6>
                <small className="text-muted">Head of Products</small>
              </div>
              <div
                className="card border-0 shadow-sm p-3"
                style={{ width: "180px" }}
              >
                <img
                  src={redstore3}
                  alt="Mabel Joe"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-0">Mabel Joe</h6>
                <small className="text-muted">Customer Success</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
