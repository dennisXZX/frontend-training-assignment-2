import React, { Component } from 'react'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends Component {
  unsubscribeFromSnapshot = null

  componentDidMount () {
    const { updateCollections } = this.props

    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      updateCollections(collectionsMap)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromSnapshot()
  }

  render () {
    const { match } = this.props

    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
