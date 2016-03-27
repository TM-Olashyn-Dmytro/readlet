// Test suite configuration
// ========================

import { jsdom } from 'jsdom'
import { expect } from 'chai'
import sinon from 'sinon'
import glob from 'glob'
import path from 'path'
import hook from 'css-modules-require-hook'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

global.sinon = sinon
global.expect = expect
global.__DEV__ = true

hook({
  extensions: ['.scss', '.css'],
  preprocessCss: function() {
    return ''
  }
})
