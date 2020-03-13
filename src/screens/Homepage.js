import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Homepage extends Component {
  render() {
    return (
      <>
        <h1>Welcome home</h1>
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
