import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        size: 'small'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        size: 'small'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        size: 'small'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
      }
    ]
  }

  generateSections = () => {
    const { sections } = this.state

    return (
      sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        />
      ))
    )
  }

  render () {
    return (
      <div className='directory-menu'>
        {this.generateSections()}
      </div>
    )
  }
}

export default Directory
