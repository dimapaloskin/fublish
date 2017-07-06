#! /usr/bin/env node
const meow = require('meow')
const { dim } = require('chalk')
const bzz = require('bzz')
const { resolve } = require('path')
const { version } = require('../package.json')
const Fublish = require('../src')

const cli = meow`
  Hello, matherfucker ;)
`

const cwd = cli.flags.cwd ? resolve(process.cwd(), cli.flags.cwd) : process.cwd()
const fublish = new Fublish({ cwd })

const runFublish = async () => {
  const message = bzz(`
    ${dim('fublish')} ${dim(version)}

  `)

  console.log(message)

  try {
    await fublish.start()
  } catch (error) {
    console.log(dim('\nCritical error. Process exited'))
    process.exit(1)
  }
}

runFublish()
