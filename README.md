# redux-storage-engine-localforage

[![build](https://travis-ci.org/mathieudutour/redux-storage-engine-localforage.svg)](https://travis-ci.org/mathieudutour/redux-storage-engine-localforage)
[![dependencies](https://david-dm.org/mathieudutour/redux-storage-engine-localforage.svg)](https://david-dm.org/mathieudutour/redux-storage-engine-localforage)
[![devDependencies](https://david-dm.org/mathieudutour/redux-storage-engine-localforage/dev-status.svg)](https://david-dm.org/mathieudutour/redux-storage-engine-localforage#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-localforage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localforage)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-localforage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localforage)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-localforage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localforage)

[localforage][] based engine for [redux-storage][]

## Installation

```bash
  npm install --save redux-storage-engine-localforage
```

## Usage

Versioned storage with migrations.

```js
import createEngine from 'redux-storage-engine-localforage'

const optionalLocalForageConfig = {
  driver      : localforage.WEBSQL, // Force WebSQL
  name        : 'myApp',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
  description : 'some description'
}

engine = createEngine('my-save-key', optionalLocalForageConfig);
```

## License

  MIT

  [localforage]: https://github.com/mozilla/localForage
  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-engine-localforage]: https://github.com/mathieudutour/redux-storage-engine-localforage
