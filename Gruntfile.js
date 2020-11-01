module.exports = function(grunt) {
grunt.initConfig({
    run: {
      build: {
        cmd: 'pm2',
        args: [
            'start',
            'index.js',
            '--name',
            'songs',
            '-i',
            '2'
        ]
      }
    },
    stop:{
        build:{
            cmd: 'pm2',
            args:[
                'stop',
                'all'
            ]
        }
    }
  });


  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('default', ['run']);
  grunt.registerTask('start', ['run']);
  grunt.registerTask('stop', ['stop']);

};
