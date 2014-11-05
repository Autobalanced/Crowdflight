// Declare app level module which depends on filters, and services

(function()
{
    'use strict';

    angular
        .module('crowdApp', [
            'ngRoute',
            'firebase'
        ])
        .config(config);

    function config($routeProvider)
    {
        $routeProvider
            .when('/',
            {
                templateUrl: 'main/landing_page.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
        $routeProvider
            .when('/login',
            {
                templateUrl: 'accounts/login.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            });
        $routeProvider
            .when('/register',
            {
                templateUrl: 'accounts/register.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            });
        $routeProvider
            .when('/survey_list',
            {
                templateUrl: 'surveylist/survey_list.html',
                controller: 'SurveyListController',
                controllerAs: 'surveyList'
            });
        $routeProvider
            .when('/survey',
            {
                templateUrl: 'survey/survey.html',
                controller: 'SurveyController',
                controllerAs: 'sv'
            });
        $routeProvider
            .when('/create',
            {
                templateUrl: 'cms/create.html',
                controller: 'CmsController',
                controllerAs: 'cms'
            });
        $routeProvider
            .when('/client_login',
            {
                templateUrl: 'accounts/clients/client_login.html',
                controller: 'ClientAuthController',
                controllerAs: 'clientAuth'
            });
        $routeProvider
            .when('/client_register',
            {
                templateUrl: 'accounts/clients/client_register.html',
                controller: 'ClientAuthController',
                controllerAs: 'clientAuth'
            });
        $routeProvider
            .when('/typeformsurvey',
            {
                templateUrl: 'typeform/typeformsurvey.html',
                controller: 'TypeformController',
                controllerAs: 'type'
            });
        $routeProvider.otherwise(
        {
            redirectTo: '/'
        });
    }
})();
