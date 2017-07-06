const detective = require('detective')
const es6detective = require('detective-es6')

const code = `
  const test = require('./test');
  import { test } from './hoho';

  console.log(test);
  const a = 12;
  const b = a + 20;
`

const modules = detective(code, {parse: {sourceType: 'module'}})
const es6modules = es6detective(code, {parse: {sourceType: 'module'}})

console.log(modules, es6modules)
