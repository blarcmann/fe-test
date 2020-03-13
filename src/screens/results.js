import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Result from '../components/Result';
import Footer from '../components/Footer';
import { fetchResults, getResponseMsg, fetchRelated } from '../actions';

export class Results extends Component {

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
    return (
      <>
        <Header top="true" />
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
        </div>
        <Footer />
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
