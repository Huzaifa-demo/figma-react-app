import React from "react";
import fires from "./images/fires.jpeg";

const Form = () => {
  return (
    <div>
      <div className="newsletter">
        <div className="text">
          <h2>Join The Newsletter To Learn About Future Events</h2>
          <p>
            Join the newsletter to and get 10% discount on your first ticket
            purchase
          </p>
          <input type="email" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>

        <div className="news-img">
          <img src={fires} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
