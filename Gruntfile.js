module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      unit: {
      },
      travis: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },
    watch: {
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('devmode', ['karma:unit', 'watch']);

  // Add a new task for travis
  grunt.registerTask('test', ['karma:travis'])
};
