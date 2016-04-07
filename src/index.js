import localforage from 'localforage'

export default (key, config = {}) => {
  localforage.config(config)

  return {
    load () {
      return localforage.getItem(key)
    },

    save (state) {
      return localforage.setItem(key, state)
    }
  }
}
