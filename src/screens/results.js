import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { misc } from '../constants/mocks';

export class Results extends Component {
  render() {
    return (
      <>
        <Header showSearch="true" />
        <div className="results-container">
          <div className="response-time">{misc.responseMsg}</div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  q: state.search.q
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
