module.exports = function (grunt) {
	var reloadPort=35729;
	grunt.initConfig({
			pkg : grunt.file.readJSON('package.json'),
			jshint : {
				files : ['Gruntfile.js','app.js','config/**/*.js'],
			},
			watch : {
				options: {
					livereload : true
				},
				html: {
					files : ['views/*.html'],
					options : { livereload : reloadPort }
				},
				js : {
					files : ['public/js/**/*.js'],
					task : ['jshint'],
				},
				less : {
					files : ['public/less/*.less'],
					options : {
						livereload : reloadPort
						}
				}
			}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['watch']);
};
