const { createRemoteFileNode } = require('gatsby-source-filesystem')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require('axios')

// create pages for each item

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/'

  const result = await graphql(`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
          skuID
        }
      }
    }
  `)

  if (result.erros) {
    reporter.panic('error loading products', reporter.errors)
  }

  const skus = result.data.allStripeSku.nodes

  skus.forEach(sku => {
    const slug = sku.slug

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/edit-sku.js'),
      context: {
        slug,
      },
    })
  })
}
