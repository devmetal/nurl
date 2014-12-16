module.exports = function(grunt) {

	grunt.initConfig({

		mochaTest: {
			options: {
				reporter: 'spec',
				ui:'tdd',
				captureFile: 'results.txt'
			},
			src:['lib/tests/**/*.js']
		}

	});

	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('default','mochaTest');

};