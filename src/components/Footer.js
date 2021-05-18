import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-bs">
      <div className="row">
        <div className="col-md-4 footer-brand animated fadeInLeft">
          <h2>Logo</h2>
          <p>
            Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
            porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget
            faucibus faucibus, purus erat eleifend enim, porta pellentesque ex
            mi ut sem.
          </p>
          <p>© 2014 BS3 UI Kit, All rights reserved</p>
        </div>

        <div className="col-md-4 footer-social animated fadeInDown">
          <h4>Follow Us</h4>
        </div>
        <div className="col-md-4 footer-ns animated fadeInRight">
          <h4>Newsletter</h4>
          <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
          <p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-envelope"></span>
                </button>
              </span>
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
