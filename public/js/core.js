'use strict';

angular
	.module('ella',[
		'ui.router',
		'btford.socket-io'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url : '/home',
				templateUrl : 'partials/home.html',
				controller : 'mainController'
			})
			.state('login',{
				url : '/login',
				templateUrl : 'partials/login.html',
				controller : 'loginController'
			});
	})
	.factory("socket", function(socketFactory) {
		return socketFactory();
	});