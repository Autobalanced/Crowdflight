(function(){
	'use strict';

	angular
		.module('crowdApp')
		.factory('SurveyService', SurveyService);

	function SurveyService(AuthService, DataService, $rootScope){

		/* jshint validthis: true */

		var currentSurvey = $rootScope.currentSurvey; //TODO: bind to user? user.currentSurvey using DataService or cookies, this way currenSurvey persists on reload.
		
		var survey = DataService.$child('surveys').$child(currentSurvey);

		var surveyServiceObject = 
			{
				getSurvey: function()
				{
					return survey;
				}
			};

		return surveyServiceObject;
	}
})();