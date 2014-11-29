module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {                 
            ignore_warning: {
                options: {
                    '-W097': true,
                    '-W117': true,
                    '-W069': true
                },
                src: ['Gruntfile.js', 'js/*.js', '!js/bootstrap.js', '!js/jquery-2.1.1.js'],
            }
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['*.js', '!bootstrap.js', '!jquery-2.1.1.js'],
                    dest: 'js-new/',
                    ext: '.min.js'
                }]
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css-new/',
                ext: '.min.css'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};