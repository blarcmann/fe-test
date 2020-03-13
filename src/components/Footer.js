import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="top footer">
            <span>Nigeria</span>
          </div>
          <div className="bottom footer">
            <div className="footer-menu left">
              <a href="http://google.com">Advertising</a>
              <a href="http://google.com">Business</a>
              <a href="http://google.com">About</a>
              <a href="http://google.com">How search works</a>
            </div>
            <div className="footer-menu right">
              <a href="http://google.com">Privacy</a>
              <a href="http://google.com">Terms</a>
              <a href="http://google.com">Settings</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;
