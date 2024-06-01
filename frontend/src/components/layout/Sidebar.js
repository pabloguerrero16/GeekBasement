import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Components</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle"></i>
                    <span>Alerts</span>
                  </a>
                </li>
                <li>
                  <a href="components-accordion.html">
                    <i className="bi bi-circle"></i>
                    <span>Accordion</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-heading">Pages</li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>F.A.Q</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-contact.html">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-register.html">
                <i className="bi bi-card-list"></i>
                <span>Register</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-login.html">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-error-404.html">
                <i className="bi bi-dash-circle"></i>
                <span>Error 404</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-blank.html">
                <i className="bi bi-file-earmark"></i>
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </Fragment>
  );
};

export default Sidebar;
