import React from "react";
import "./AccessDenied.css";

const AccessDenied = () => {
  return (
    <div>
      <h1 className="title">Oops!</h1>
      <h3 className="reason">You're on a small screen.</h3>
      <p className="greet">
        For a better browsing experience, we recommend visiting our site on a
        laptop or desktop. Our content is optimized for larger screens, ensuring
        you don’t miss out on anything!
      </p>
      <strong>Thank you for your understanding!</strong>
    </div>
  );
};

export default AccessDenied;
