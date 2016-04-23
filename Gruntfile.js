var fs = require('fs');
var path = require('path');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = function (grunt) {
    
    require('load-grunt-tasks')(grunt);
    
    require('time-grunt');
    require('jit-grunt');
    
    var configPath = path.resolve('./grunt/config');
    var taskPath   = path.resolve('./grunt/tasks');
    
    fs.readdirSync(configPath).forEach(function (filename) {
        if (endsWith(filename, '.js')) {
            require(path.join(configPath, filename))(grunt);
        }
    });
    
    fs.readdirSync(taskPath).forEach(function (filename) {
        if (endsWith(filename, '.js')) {
            require(path.join(taskPath, filename))(grunt);
        }
    });
};