module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactTranslate',
      externals: {
        react: 'React'
      }
    }
  }
}
