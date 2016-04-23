module.exports = function (grunt) {
    grunt.config.set('typescript', {
        app: {
            src: ['application/typescript/**/*.ts'],
            dest: 'htdocs/js/',
            options: {
                module: 'amd',
                target: 'es5',
                declaration: false
            }
        },
    });
}