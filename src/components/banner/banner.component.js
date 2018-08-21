import React from 'react'
import './banner.styles.css'

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-text">Token Generation Event starts in </div>
        <div className="banner-button">button</div>
      </div>
    )
  }
}
