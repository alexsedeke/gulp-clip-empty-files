var through     = require('through2');

var plugin = function () {
    return through.obj(function (file, enc, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        // prevent empty files
        if (file.contents.length > 0) {
            this.push(file);
            return callback();
        }

        callback();
    });
};

module.exports = plugin;