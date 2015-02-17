'use strict';

angular
	.module('ella',[
		'ui.router'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('/home', {
				url : '/home',
				templateUrl : 'views/index.html',
				controller : 'mainController'
			});
	});