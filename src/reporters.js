const { red, dim } = require('chalk')
const { levels } = require('./constants')

module.exports = (function () {
  const pull = {
    [levels.WARN]: [],
    [levels.ERROR]: []
  }

  return {
    getAll: () => {
      return pull
    },

    warn: ({ message, details }) => {
      const problem = { message, details }
      pull[levels.WARN].push(problem)
    },

    critical: ({ message, details }) => {
      console.log('', red(levels.CRITICAL), message)
      console.log('  ', dim(details))
      throw new Error(message)
    }
  }
})()
