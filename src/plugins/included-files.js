// const detective = require('detective')
// const es6detective = require('detective-es6')
const { levels } = require('../constants')

module.exports = {
  name: 'included-files',
  description: 'Analize required files based on files section in package.json',
  config: {
    extensions: ['js', 'json'],
    level: levels.ERROR
  },
  run: async ({ cwd, pkg, config, reporter }) => {}
}
