import localforage from 'localforage'

function rejectWithMessage (error) {
  return Promise.reject(error.message)
}

export default (key, config = {}, replacer, reviver) => {
  localforage.config(config)

  return {
    load () {
      return localforage.getItem(key)
        .then((jsonState) => JSON.parse(jsonState, reviver) || {})
        .catch(rejectWithMessage)
    },

    save (state) {
      return Promise.resolve()
        .then(() => JSON.stringify(state, replacer))
        .then((jsonState) => localforage.setItem(key, jsonState))
        .catch(rejectWithMessage)
    }
  }
}
