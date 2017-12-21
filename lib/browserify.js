'use strict'

const stream = require('stream')
const browserify = require('browserify')

const Readable = stream.Readable
const argv = process.argv.slice(2)

const type = argv[0]
const content = JSON.parse(argv[1])
const options = JSON.parse(argv[2])
const locals = JSON.parse(argv[3] || null)

let b

if (type === 'text') {
  const stream = new Readable()

  stream.push(content)
  stream.push(null)

  b = browserify(stream, options)
} else {
  b = browserify(options)
  b.add(content, locals)
}

b.bundle((err, content) => {
  if (err) {
    process.stderr.write(err.stack || '')
    process.exit(1) // eslint-disable-line unicorn/no-process-exit
  } else {
    process.stdout.write(content.toString())
  }
})
