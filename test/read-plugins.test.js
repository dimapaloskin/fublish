import test from 'ava'
import { resolve } from 'path'
import Fublish from '../src/'

test('should read plugins', async t => {
  const cwd = resolve(process.cwd(), 'test/__fixtures__/project')
  const fublish = new Fublish({ cwd })

  const result = await fublish.readPlugins()
  console.log(result)

  t.pass()
})
