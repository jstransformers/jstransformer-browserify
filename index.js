'use strict'

const path = require('path')
const stream = require('stream')
const browserify = require('browserify')
const extend = require('extend-shallow')

const Readable = stream.Readable

exports.name = 'browserify'
exports.outputFormat = 'js'

exports.renderFileAsync = function (filename, options, locals) {
  return new Promise((resolve, reject) => {
    const b = browserify(options || {})
    b.add(filename, locals)
    b.bundle((err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf.toString())
      }
    })
  })
}

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    // Inject the basedir from the filename, if available.
    options = extend({}, options, locals)
    if ({}.hasOwnProperty.call(options, 'filename') && !{}.hasOwnProperty.call(options, 'basedir')) {
      options.basedir = path.dirname(options.filename)
    }

    // Create a stream from the input string.
    const streamreadable = new Readable()
    streamreadable.push(str)
    streamreadable.push(null) // Indicate the end of the stream.

    // Create the Browserify object.
    const b = browserify(streamreadable, options)
    b.bundle((err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf.toString())
      }
    })
  })
}

