import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Result from '../components/Result';
import Footer from '../components/Footer';
import { fetchResults, getResponseMsg, fetchRelated } from '../actions';

export class Results extends Component {

  state = {
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  componentDidMount() {
    const { fetchResults, getResponseMsg, fetchRelated } = this.props;
    getResponseMsg();
    fetchResults();
    fetchRelated();
  }

  renderRelated = (title) => {
    return (
      <a href="https://google.com" key={title} className="rel" alt="title">{title}</a>
    )
  }

  render() {
    const { results, msg, related } = this.props;
    const { pages } = this.state;
    return (
      <>
        <Header top="true" altSearch={true} />
        <div className="results-container">
          <div className="response-time">{msg.responseMsg}</div>
          <div className="results">
            {results.map(res => <Result result={res} key={res.id} />)}
          </div>
          <div className="related">
            <h2>Searches related to react-navigation-stack</h2>
            <div className="related-group">
              {related && related.length ?
                related.map(rel => this.renderRelated(rel))
                : ''}
            </div>
          </div>
          <div className="misc-container">
            <div className="footer-logo">
              <span className="blue">G</span>
              <span className="red">o</span>
              <span className="gold">o</span>
              <span className="gold">o</span>
              <span className="gold">o</span>
              <span className="gold">o</span>
              <span className="gold">o</span>
              <span className="blue">g</span>
              <span className="green">l</span>
              <span className="red">e</span>
            </div>
            <div className="pagination">
              {pages.map(p => <a href="https://google.com" key={p}>{p}</a>)}
              <a className="next" href="https://google.com">Next</a>
            </div>
          </div>
        </div>
        <Footer fixed={false} />
      </>
    )
  }
}

const mapStateToProps = ({ search }) => {
  const { results, msg, related } = search;
  return { results, msg, related }
}



const mapDispatchToProps = {
  fetchResults, getResponseMsg, fetchRelated
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
