'use strict';

var browserify = require('browserify');
var browserifyString = require('browserify-string');
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

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    browserifyString(str, options).bundle(function (err, src) {
      if (err) {
        reject(err);
      } else {
        resolve(src.toString());
      }
    })
  })
};
