'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = './test/input.txt';
var expected = fs.readFileSync(join(__dirname, 'expected.txt')).toString();

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('should build input.txt correctly', function (done) {
  transform.renderFileAsync(input).then(function (output) {
    assertEqual(output.trim(), expected.trim());
    done();
  }, function (err) {
    done(err);
  }).done();
});

test('should fail cleanly when file not found', function (done) {
  transform.renderFileAsync('./test/filenotexist.txt').then(function (output) {
    // Return an error message.
    done(new Error('Browserify found a filenotexist.txt'));
  }, function (err) {
    // Expected failure.
    done();
  });
});
