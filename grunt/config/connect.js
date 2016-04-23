module.exports = function (grunt) {
    grunt.config.set('connect', {
        dev: {
            options: {
                port: 8083,
                base: ['htdocs/'],
                open: true,
                hostname: "127.0.0.1",
                livereload: true
            },
        },
    });
};