import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <>
        <div className="header-container">
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
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
