const { alias } = require('react-app-rewire-alias')

module.exports = function override (config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@features': 'src/features',
    '@language': 'src/language',
    '@screens': 'src/screens',
    '@styles': 'src/styles',
    '@types': 'src/types',
    '@utils': 'src/utils'
  })(config)

  return config
}
