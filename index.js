var chokidar = require('chokidar');
var touch = require('touch');

module.exports = function(dir){

  var watcher = chokidar.watch(dir, {
      ignored: /node_modules|\.swp/i,
      ignoreInitial: true,
      persistent: true
    });

  watcher
    .on('change', function(path) {
      console.log("change: " + path);
      touch(path);
    });
}
