import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchResults, getResponseMsg } from '../actions';

export class Results extends Component {

  componentDidMount() {
    const { fetchResults, getResponseMsg } = this.props;
    fetchResults();
    getResponseMsg();
  }

  render() {
    const { results, msg } = this.props;
    return (
      <>
        <Header showSearch="true" />
        <div className="results-container">
          <div className="response-time">{msg.responseMsg}</div>

          <div className="results">
            <div className="each-result">
              <a href="https://google.com">
                <h3>Corona virus, safety tips</h3>
                <div className="breadcrumb">
                  <cite>mothefucking.com.ng > take care > safe flape</cite>
                  <span>v</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = ({ search }) => {
  const { results, msg } = search;
  return { results, msg }
}



const mapDispatchToProps = {
  fetchResults, getResponseMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
