import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = (props) => {
  const {
    history,
    imageUrl,
    linkUrl,
    match,
    size,
    title
  } = props

  return (
    <div className={`menu-item ${size}`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* background image for hover-scaling effect */}
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
