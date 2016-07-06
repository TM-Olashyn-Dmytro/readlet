// Global event bus
// ================

import Emitter from 'tiny-emitter'

const bus = new Emitter()

export function on() {
  return bus.on(...arguments)
}

export function off() {
  return bus.off(...arguments)
}

export function emit() {
  return bus.emit(...arguments)
}
