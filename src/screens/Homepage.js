import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryChanged } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggestions from '../components/Suggestions';

export class Homepage extends Component {
  state = {
    suggestions: false
  }

  onInputChange = (e) => {
    const q = e.target.value;
    this.props.queryChanged(q);
    this.renderSuggestions();
  }

  renderSuggestions = () => {
    const { q } = this.props;
    if (q.length > 0) {
      return <Suggestions />;
    };
  }

  renderOthers = () => {
    return (
      <>
        <div className="other-actions">
          <button className="gray-button">Google Search</button>
          <button className="gray-button">I'm Feeling Lucky</button>
        </div>
        <div className="offers">
          <span>Google offered in:</span>
          <a href="https://google.com">Hausa</a>
          <a href="https://google.com">Igbo</a>
          <a href="https://google.com">Èdè Yorùbá</a>
          <a href="https://google.com">Nigerian Pidgin</a>
        </div>
      </>
    )
  }

  render() {
    const { q } = this.props;
    return (
      <>
        <Header top="false" />
        <div className="search-container">
          <center>
            <div className="main-logo">
              <img src={require('../assets/images/google.png')} alt="logo" />
            </div>
            <div className="search-bar">
              <div className="search-icon left">
                <img src={require('../assets/images/search.png')} className="left" alt="logo" />
              </div>
              <div className="search-input">
                <input type="text" name="search" id="search"
                  className={q && q.length ? "results" : ""}
                  autoFocus={true}
                  onChange={this.onInputChange} />
              </div>
              <div className="search-icon">
                <img src={require('../assets/images/microphone.png')} className="right" alt="logo" />
              </div>
            </div>
            {/* <div className="divider"></div> */}
            {this.renderSuggestions()}
            {this.renderOthers()}
          </center>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  q: state.search.q
})

export default connect(mapStateToProps, { queryChanged })(Homepage)
