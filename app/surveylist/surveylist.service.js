(function(){
	'use strict';

	angular
		.module('crowdApp')
		.factory('SurveyListService', SurveyListService);

		function SurveyListService(DataService, $rootScope)
		{
			var surveys = DataService.$child('surveys');

			var surveyListServiceObject = 
			{
				getSurveys: function()
				{
					return surveys;
				},
				setSurvey: function(surveyId)
				{
					$rootScope.currentSurvey = surveyId;
				}
			};

			return surveyListServiceObject;
		}

})();