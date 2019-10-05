import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ imageUrl, title, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      {/* background image for hover-scaling effect */}
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
