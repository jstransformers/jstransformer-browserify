# jstransformer-browserify

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-browserify.svg)](https://greenkeeper.io/)

[Browserify](http://browserify.org/) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-browserify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-browserify)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-browserify/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-browserify?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-browserify/master.svg)](http://david-dm.org/jstransformers/jstransformer-browserify)
[![NPM version](https://img.shields.io/npm/v/jstransformer-browserify.svg)](https://www.npmjs.org/package/jstransformer-browserify)

## Installation

    npm install jstransformer-browserify

## API

```js
var browserify = require('jstransformer')(require('jstransformer-browserify'))

browserify.renderFileAsync('./app.js', function (err, data) {
  data.body
  //=> Compiled JavaScript
});
```

## License

MIT
