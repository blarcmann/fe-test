import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="search-cover">
          <center>
            <div className="center-logo">
              <img src={require('../assets/images/google.png')} alt="logo" />
            </div>
            <div className="search-bar">
              <div className="search-icon left">
                <img src={require('../assets/images/search.png')} alt="logo" />
              </div>
              <div className="search-input">
                <input type="text" name="search" id="search" />
              </div>
              <div className="search-icon right">
                <img src={require('../assets/images/microphone.png')} alt="logo" />
              </div>
            </div>
            <div className="others">
              <button className="gray-button">Google Search</button>
              <button className="gray-button">I'm Feeling Lucky</button>
            </div>
            <div className="offers">
              <span>Google offered in</span>
              <a href="https://google.com">Hausa</a>
              <a href="https://google.com">Igbo</a>
              <a href="https://google.com">Èdè Yorùbá</a>
              <a href="https://google.com">Nigerian Pidgin</a>
            </div>
          </center>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
