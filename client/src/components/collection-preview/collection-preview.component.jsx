import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles'

const CollectionPreview = props => {
  const { title, items, history, match, routeName } = props

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>

      <PreviewContainer>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item}/>
            ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
