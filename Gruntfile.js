module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      'css/style.css': 'less/*.less' // destination file and source file
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
};