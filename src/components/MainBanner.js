import React from "react";

const MainBanner = () => {
  return (
    <div className="curved-bottom">
      <div className="container pt-sm-5 pt-xs-0">
        <div className="row align-items-center gap-2 justify-content-between">
          <div className="col-sm-5 col-xs-12">
            <h1 className="title">Surge Protection Plans</h1>
            <p className="mt-3">
              When bad weather threatens your electronics and appliances, Direct
              Energy Surge Protect provided by Allied Warranty will make sure
              you are protected with our surge protection plans
            </p>
            <button className="btn btn-outline-green">LEARN MORE</button>
          </div>
          <img
            className="col-sm-5 col-xs-12 img-fluid"
            src="https://ik.imagekit.io/deui/man-on-cpu-potatoa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673902739571"
            alt="Illustration is here"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
