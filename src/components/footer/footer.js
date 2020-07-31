import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://twitter.com/ariesLuvsCoding">
                  <i className="fa fa-twitter" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/tiffany-mclean-545a60100/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Aries324">
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020</li>
              <li>Design by Tiffany McLean</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
