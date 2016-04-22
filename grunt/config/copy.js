module.exports = function (grunt) {
    grunt.config.set('copy', {
        app: {
            files: [
                {
                    cwd: "application/",
                    expand: true,
                    src: ['**'],
                    dest: 'htdocs/'
                },
            ]
        },
        vendor: {
            files: [
                {
                    cwd: 'bower_components/',
                    expand: true,
                    src: ['**'],
                    dest: 'htdocs/vendor'
                },
            ]
        }
    });
};