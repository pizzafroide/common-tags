'use strict'

import test from 'ava'
import stripIndent from './stripIndent'
import {readFromFixture} from '../utils'

const val = 'amaze'

test('strips indentation', async (t) => {
  const expected = await readFromFixture('stripIndent')
  const actual = stripIndent`
    wow such indent gone
    very ${val}
  `
  t.is(actual, expected)
})

test('strips larger indentation', async (t) => {
  const expected = await readFromFixture('stripIndent')
  const actual = stripIndent`
      wow such indent gone
      very ${val}
  `
  t.is(actual, expected)
})

test('maintains deeper indentation', async (t) => {
  const expected = await readFromFixture('maintainIndent')
  const actual = stripIndent`
    wow such indent gone
        very ${val}
  `
  t.is(actual, expected)
})

test('does nothing if there are no indents', async (t) => {
  const expected = 'wow such doge'
  const actual = stripIndent`wow such doge`
  t.is(actual, expected)
})
