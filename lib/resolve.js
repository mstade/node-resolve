#!/usr/bin/env node

const path = require('path')

if (process.argv[2]) {
  process.argv.slice(2).map(resolve)
} else {
  const read = require('readline').createInterface(
    { input: process.stdin
    , output: process.stdout
    , terminal: false
    }
  )

  read.on('line', function(line) {
    line.split(/\s+/g).map(resolve)
  })
}

function resolve(name) {
  try {
    [ '/Users/mstade/dev/zambezi/dev-site' ]
    require.main.paths = process.cwd().split(path.sep).reduce(function(paths, x, i, arr) {
      return paths.concat(
        path.join(arr.slice(0, -i || arr.length).join(path.sep), 'node_modules')
      )
    }, [])
    console.log(require.resolve(name))
  } catch (e) {
    console.error('Error:', e.message)
    process.exit(1)
  }
}
