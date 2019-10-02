module.exports = {
  plugins: [{resolve: 'gatsby-theme-stripe-base', options: {
        stripeSecretKey: process.env.STRIPE_API_SECRET,
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
      }}],
}
