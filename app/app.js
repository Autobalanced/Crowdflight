// Declare app level module which depends on filters, and services

(function() {
    'use strict';

    angular
        .module('crowdApp', [
            'ngRoute',
            'firebase'
        ])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main/landing_page.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
        $routeProvider
            .when('/login', {
                templateUrl: 'accounts/login.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            });
        $routeProvider
            .when('/register', {
                templateUrl: 'accounts/register.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            });
        $routeProvider
        	.when('/survey_list', {
        		templateUrl: 'survey/survey_list.html',
        		controller: 'SurveyController',
        		controllerAs: 'survey'
        	});
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
