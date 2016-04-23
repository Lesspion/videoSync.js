module.exports = function (grunt) {
    grunt.registerTask('default', ['copy:app', 'copy:vendor', 'sass:app', 'typescript:app', 'connect:dev', 'watch']);
};