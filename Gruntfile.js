module.exports = function(grunt) {

	grunt.initConfig({

		mochaTest: {
			options: {
				reporter: 'nyan',
				ui:'tdd',
				captureFile: 'results.txt'
			},
			src:['unit/**/*.js']
		}

	});

	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('default','mochaTest');

};