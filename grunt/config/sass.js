module.exports = function (grunt) {
    grunt.config.set('sass', {
        app: {
            options: {
                noCache: true,
                sourcemap: "none"
            },
            files: [{
                expand: true,
                cwd: 'application/sass',
                src: ['*.sass', '*.scss'],
                dest: 'htdocs/styles/',
                ext: '.css'
            }],
        },
    });
}