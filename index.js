var requireDirectories = require('require-dir');
module.exports = requireDirectories('./tasks', { recurse: true });