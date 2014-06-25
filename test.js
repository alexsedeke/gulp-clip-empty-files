'use strict';
var assert = require('assert');
var gutil  = require('gulp-util');
var clip   = require('./index');
var path   = require('path');

it('should clip empty files', function (cb) {
    var stream = clip();

    stream.on('data', function (file) {
        assert.notEqual(file.contents.length, 0);
        cb();
    });

    stream.write(new gutil.File({
        path: 'cornless.scss',
        contents: new Buffer('')
    }));

    stream.write(new gutil.File({
        path: 'unicorn.scss',
        contents: new Buffer('d1')
    }));
});