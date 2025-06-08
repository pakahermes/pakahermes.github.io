module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/roofing-company-website/' : '/',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  }
}