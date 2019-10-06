import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { jsx } from 'gatsby-theme-stripe-base/src/gatsby-plugin-theme-ui'

const SkuList = () => {
  console.log('jsx', jsx)
  const query = useStaticQuery(graphql`
    {
      allStripeSku {
        nodes {
          currency
          number_price
          product
          skuID
          slug
          inventory {
            type
          }
        }
      }
    }
  `)

  const skus = query.allStripeSku.nodes

  return <h1>hi</h1>
}

export default SkuList
