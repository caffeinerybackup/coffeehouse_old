module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                src: ["app/less/*.less", "!app/less/bless.less"],
                dest: "app/css/<%= pkg.name %>.css",
                options: {
                    strictMath: true,
                    //sourceMap: true,
                    //sourceMapURL: '<%= pkg.name %>.css.map',
                    //sourceMapFilename: 'app/css/<%= pkg.name %>.css.map'
                }
            },
            minify: {
                src: "app/css/<%= pkg.name %>.css",
                dest: "app/css/<%= pkg.name %>.min.css",
                options: {
                    strictMath: true,
                    compress: true,
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'app/css/<%= pkg.name %>.min.css': 'app/css/<%= pkg.name %>.css'
                }
            }
        },
        watch: {
            less: {
                files: ['app/less/*.less'],
                tasks: ['less:compile', 'less:minify'],
                options: {
                    spawn: false
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
};