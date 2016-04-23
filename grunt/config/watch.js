module.exports = function (grunt) {
    grunt.config.set('watch', {
        app: {
            files: [
                'application/**/*',
            ],
            tasks: [
                'copy:app',
            ],
            options: {
                livereload: true,
                interrupt: true,
            },
        },
        sass: {
            tasks: [
                'sass:app',
            ],
            options: {
                livereload: true,
                interrupt: true,
            },
            files: ['sass/**/*'],
        },
        vendor: {
            tasks: [
                'copy:vendor',
            ],
            options: {
                livereload: true,
                interrupt: true,
            },
            files: ['bower_components/**/*'],
        }
    })
};