'use strict';

var browserify = require('browserify');
var Promise = require('promise');

exports.name = 'browserify';
exports.outputFormat = 'js';

exports.renderFileAsync = function (filename, options, locals) {
  return new Promise(function (resolve, reject) {
    var b = browserify(options);
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
