import localforage from 'localforage'

export default (key, config = {}) => {
  let hasImmutable
  if ('hasImmutable' in config) {
    hasImmutable = config.hasImmutable
    delete config.hasImmutable
  } else {
    hasImmutable = false
  }

  localforage.config(config)

  return {
    load () {
      return localforage.getItem(key)
    },

    save (state) {
      if (hasImmutable) {
        const isIterable = require('immutable').Iterable.isIterable
        for (const branch in state) {
          if (isIterable(state[branch])) {
            state[branch] = state[branch].toJS()
          }
        }
      }
      return localforage.setItem(key, state)
    }
  }
}
