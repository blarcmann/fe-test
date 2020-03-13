import React from 'react'

export default function Result({ result }) {
  return (
    <div className="each-result">
      <a href="https://google.com">
        <h3>{result.title}</h3>
        <div className="b-crumb">
          <cite>{result.url}</cite>
          <img src={require('../assets/images/caret-down.png')} alt="" />
        </div>
      </a>
      <div className="description">{result.description}</div>
    </div>
  )
}
