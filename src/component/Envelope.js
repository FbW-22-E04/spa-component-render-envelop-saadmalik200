import React from "react";
import "./Envelope.css";
import image from "../images/1.png";

function Envelope(props) {
  console.log(props.addressTo);
  return (
    <div className="container">
      <div className="flex-top">
        <div>
          {" "}
          {props.toPerson}
          {props.addressTo}
        </div>
        <div className="img-border">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex-center">
        <div>
          {" "}
          {props.fromPerson}
          {props.addressFrom}
        </div>
      </div>
    </div>
  );
}

export default Envelope;
