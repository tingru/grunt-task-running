module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'js/app.js', 'signup.js']
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['app.js', 'signup.js'],
                    dest: 'js-new/'
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