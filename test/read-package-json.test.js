import test from 'ava'
import { resolve } from 'path'
import { Fublish } from '../'

test('should return error if package.json does not exist', async t => {
  const cwd = resolve(process.cwd(), 'test/__fixtures__/not-exists')
  const fublish = new Fublish({
    cwd
  })

  const promise = fublish.readPackageJson()
  const error = await t.throws(promise)
  t.is(error.message, 'package.json does not exist')
})

test('should return error if package.json is unparseable', async t => {
  const cwd = resolve(process.cwd(), 'test/__fixtures__/unparseable-package-json')
  const fublish = new Fublish({
    cwd
  })

  const promise = fublish.readPackageJson()
  const error = await t.throws(promise)
  t.is(error.message, 'package.json can not be parsed')
})

test('should return correct package.json object', async t => {
  const cwd = resolve(process.cwd(), 'test/__fixtures__/project')
  const pkg = require('./__fixtures__/project/package.json')

  const fublish = new Fublish({
    cwd
  })

  const result = await fublish.readPackageJson()
  t.deepEqual(result, pkg)
})
