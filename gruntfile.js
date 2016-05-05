module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({

    connect: {
      options:{
        port:4000,
        hostname:'localhost',
        livereload:35729
      },
      server: {
        options: {
          open: true, // auto open default bowser
          base: ['src']
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: ['src/{,*/}*.*'],
      },
      scripts: {
         files: [
                    'src/sass/**/*.scss'
                ],
                tasks: ['sass']
            }
    },

    // scss
    sass: { 
        dist:{                             
             files: [{
                expand: true,
                cwd: 'src/sass',
                src: ['*.scss'],
                dest: 'src/css',
                ext: '.css'
              }]
            }
        }



  });

  grunt.registerTask('s', ['sass']);

  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);

};