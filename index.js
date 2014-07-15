var chokidar = require('chokidar');
var touch = require('touch')

var watcher = chokidar.watch(".", {
  ignored: /node_modules/i,
  ignoreInitial: true,
  persistent: true
  });

watcher.on('change', function(path) {
  touch(__dirname + '/' + path);
});

module.exports = watcher
