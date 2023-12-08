import React, { Fragment } from "react";

function MainContent() {
  return (
    <Fragment>
      <div className="hero-section">
        <div className="container">
          <h1 className="main-heading">Car Buying Shaped To Your Life</h1>
          <p>
            Ecommerce landing pages are digital storefronts. This is what grabs
            the visitor's attention, keeps them on your site and start their
            shopping experience.
          </p>
          <div className="search-car">
            <input type="text" placeholder="Search Make, Model Or Type" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="hero-sec-btn">
            <button className="shopnew-btn">Shop New</button>
            <button className="shop-btn">Shop Used</button>
            <button className="electric-btn">Shop Electric</button>
            <button className="clint-btn">Client Budged</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainContent;
