# jstransformer-browserify

[Browserify](http://browserify.org/) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-browserify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-browserify)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-browserify/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-browserify?branch=master)
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
