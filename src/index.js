const { pathExists, readJson } = require('fs-extra')
const { resolve } = require('path')
const problems = require('./problems')

class Fublish {
  constructor ({ cwd }) {
    this.cwd = cwd
  }

  async readPackageJson () {
    const pkgPath = resolve(this.cwd, 'package.json')

    const exists = await pathExists(pkgPath)
    if (!exists) {
      problems.critical({
        message: 'package.json does not exist',
        details: pkgPath
      })
    }

    try {
      const pkg = await readJson(pkgPath)
      return pkg
    } catch (error) {
      problems.critical({
        message: 'package.json can not be parsed',
        details: pkgPath
      })
    }
  }

  async readPlugins () {
    console.log('will read plugins')
  }

  async start () {
    this.pkg = await this.readPackageJson()
  }
}

module.exports = Fublish
