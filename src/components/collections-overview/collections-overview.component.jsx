import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = props => {
  const { collections, ...otherCollectionsProps } = props

  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} {...otherCollectionProps} />
        ))
      }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
