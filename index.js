'use strict';

var browserify = require('browserify');
var Promise = require('promise');
var path = require('path');
var Readable = require('stream').Readable;
var extend = require('extend-shallow');

exports.name = 'browserify';
exports.outputFormat = 'js';

exports.renderFileAsync = function (filename, options, locals) {
  return new Promise(function (resolve, reject) {
    var b = browserify(options || {});
    b.add(filename, locals);
    b.bundle(function (err, buf) {
      if (err) {
        reject(err);
      }
      else {
        resolve(buf.toString());
      }
    });
  });
};

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    // Inject the basedir from the filename, if available.
    options = extend({}, options, locals);
    if (options.hasOwnProperty('filename') && !options.hasOwnProperty('basedir')) {
      options.basedir = path.dirname(options.filename);
    }

    // Create a stream from the input string.
    var stream = new Readable();
    stream.push(str);
    stream.push(null); // Indicate the end of the stream.

    // Create the Browserify object.
    var b = browserify(stream, options);
    b.bundle(function (err, buf) {
      if (err) {
        reject(err);
      }
      else {
        resolve(buf.toString());
      }
    })
  })
};
