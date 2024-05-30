import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Frontend Designed by{" "}
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
