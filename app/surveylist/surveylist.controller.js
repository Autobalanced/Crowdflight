(function(){
	'use strict';

	angular
		.module('crowdApp')
		.controller('SurveyListController', SurveyListController);

	SurveyListController.$inject = ['AuthService', 'SurveyListService', '$location'];

	function SurveyListController(AuthService, SurveyListService, $location){

		// TODO: To be implemented when CMS can upload surveys.
		// AuthService.getCurrentUser().then(function(user)
		// {
		// 	if (user)
		// 	{
		// 		surveys = surveyListService.getSurveysByUserId(user.id);
		// 	}
		// });

		/* jshint validthis: true */
		var vm = this;

		vm.surveys = SurveyListService.getSurveys();

		vm.setSurvey = function (surveyId)
		{
			SurveyListService.setSurvey(surveyId);

			$location.path('/survey');
		};		
	}
})();