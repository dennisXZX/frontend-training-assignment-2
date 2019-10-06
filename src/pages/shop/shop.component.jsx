import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  // Helper function to generate all collections
  generateCollectionPreviews = () => {
    const { collections } = this.state

    return (
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    )
  }

  render () {
    return (
      <div className='shop-page'>
        {this.generateCollectionPreviews()}
      </div>
    )
  }
}

export default ShopPage
