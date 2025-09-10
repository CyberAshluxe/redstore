import React from "react";
import footballer from "../assets/image1.png";
import { MoveRight } from "lucide-react";
const Herosection = () => {
  return (
    <>
      <section className="container herosection">
        <div className="row justify-content-center align-items-center vh-100 mx-0">
          <div className="col-md-6">
            <h1 className="fw-bolder">
              Give Your Workout <br />A New Style !
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency.
              Consistent <br />
              hard work gain success. Greatness will come..
            </p>
            <button className="btn btn-danger rounded-pill">
              Explore now <MoveRight />
            </button>
          </div>
          <div className="col-md-6">
            <img src={footballer} alt="Footballer" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
