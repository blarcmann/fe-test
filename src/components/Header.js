import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  state = {
    tabs: [
      { title: 'All', icon: 'finder.png' },
      { title: 'Videos', icon: 'videos.png' },
      { title: 'Images', icon: 'images.png' },
      { title: 'News', icon: 'news.png' },
      { title: 'Maps', icon: 'map.png' },
      { title: 'More', icon: 'more.png' }
    ],
    others: [
      { title: 'Settings' },
      { title: 'Tools' }
    ],
    active: 'Videos'
  }

  renderTabs = (tab) => {
    const { active } = this.state;
    return (
      <div
        key={tab.title}
        className={active === tab.title ? "tab pointer active" : "tab pointer"}
        onClick={() => this.activateTab(tab.title)}
      >
        {tab && tab.icon ? <img src={require(`../assets/images/${tab.icon}`)} alt='*' /> : ''}
        <span>{tab.title}</span>
      </div>
    )
  }

  activateTab = (tab) => {
    this.setState({ active: tab })
  }

  render() {
    const { q, top, altSearch } = this.props;
    const { others, tabs } = this.state;
    return (
      <>
        <div className={
          top ? "header-container right" : "header-container",
          altSearch ? 'header-container results' : 'header-container right'
        }>
          {altSearch ?
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
                    autoFocus={!top}
                    onChange={this.onInputChange} />
                </div>
                <div className="search-icon">
                  <img src={require('../assets/images/microphone.png')} className="right" alt="logo" />
                </div>
              </div>
            </div>
            : ''}
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
        {altSearch ?
          <div className="header-tabs">
            <div className="menus">
              <div className="tabs">
                {tabs.map(t => this.renderTabs(t))}
              </div>
              <div className="others">
                {others.map(t => this.renderTabs(t))}
              </div>
            </div>
          </div>
          : ''}
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
