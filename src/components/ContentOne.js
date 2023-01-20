import React from "react";

const ContentOne = () => {
  return (
    <div className="row align-items-center">
      <img
        className="col-sm-6 col-xs-12 img-fluid"
        src="https://ik.imagekit.io/deui/woman-at-cpu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673902737487"
        alt="Illustration is here"
      />
      <div className="col-sm-6 col-xs-12 pt-2">
        <h3 className="subtitle">How does Surge Protection Plan work?</h3>
        <p>
          Direct Energy's Surge Protect plans provides up to a total of $2000 in
          annual coverage for eligible items with no long-term contract and no
          service call fee.
        </p>
        <p>
          Plus any needed service will be provided by licensed, insured and
          background-checked Master electricians.
        </p>
      </div>
    </div>
  );
};

export default ContentOne;
