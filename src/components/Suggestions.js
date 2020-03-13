import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestions } from '../actions';

export class Suggestions extends Component {
  componentDidMount() {
    this.props.fetchSuggestions();
  }

  renderSuggestions(s) {
    return (
      <li key={s}>
        <img src={require('../assets/images/search.png')} alt="search" />
        <span>{s}</span>
      </li>
    )
  }

  render() {
    const { suggestions } = this.props;
    return (
      <>
        {suggestions && suggestions.length > 0 ?
          <div className="search-results">
            <div className="results">
              <ul>
                {suggestions.map(s => this.renderSuggestions(s))}
              </ul>
            </div>
          </div>
          : ''}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  suggestions: state.search.suggestions
})


export default connect(mapStateToProps, { fetchSuggestions })(Suggestions)
