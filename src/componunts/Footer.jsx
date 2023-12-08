import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
      <div className="footer-section">
        <div className="products">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Used</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Sell Your Car</a></li>
            <li><a href="#">Ev</a></li>
            <li><a href="#">Military</a></li>
            <li><a href="#">Buy Online</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
        <div className="products">
          <h3>Resource</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="products">
          <h3>Work With X-Car</h3>
          <ul>
            <li><a href="#">Dealers</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div className="products">
          <h3>About</h3>
          <ul>
            <li><a href="#">X-Car</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>
      </div>
        <div className="social-icons social-footer-section">
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </div>
    </Fragment>
  )
}


export default Footer