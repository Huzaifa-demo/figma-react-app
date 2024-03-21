import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.cardimg} alt="" />
      <h4>Billy Joel & Stevie Nicks</h4>
      <h5>New York, United States</h5>
      <span>from $80</span>
    </div>
  );
};

export default Card;
