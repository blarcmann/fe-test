import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  // renderTabs = (tab) => { }

  render() {
    const { q } = this.props;
    return (
      <>
        <div className="header-container results">
          <div className="search">
            <div className="logo">
              <img src={require('../assets/images/google.png')} alt="logo" />
            </div>
            <div className="search-bar results">
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
          </div>
          <div className="menu-items">
            <div className="links">
              <Link to="/">Gmail</Link>
              <Link to="/">Images</Link>
            </div>
            <div className="icon pointer">
              <img src={require('../assets/images/menu.png')} alt="menu" />
            </div>
            <div className="icon pointer">
              <img src={require('../assets/images/user.png')} className="user" alt="user" />
            </div>
          </div>
        </div>
        <div className="header-tabs">
          <div className="menus">
            <div className="tabs">
              <div className="tab pointer active">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>All</span>
              </div>
              <div className="tab">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>Videos</span>
              </div>
              <div className="tab">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>Images</span>
              </div>
              <div className="tab">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>News</span>
              </div>
              <div className="tab">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>Maps</span>
              </div>
              <div className="tab">
                <img src={require('../assets/images/search.png')} alt="s" />
                <span>More</span>
              </div>
            </div>
            <div className="others">
              <div className="tab">
                <span>Settings</span>
              </div>
              <div className="tab">
                <span>Tools</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  q: state.search.q
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
