module.exports = function (grunt) {
	grunt.initConfig({
			pkg : grunt.file.readJSON('package.json'),
			jshint : {
				files : ['Gruntfile.js','app.js','config/**/*.js'],
			},
			watch : {
				options: {
					livereload : true,
				},
				html: {
					files : ['index.html'],
				},
				js : {
					files : ['public/js/**/*.js'],
					task : ['jshint'],
				}
			}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['jshint']);
};
