(function(){
	'use strict';

	angular
		.module('crowdApp')
		.controller('SurveyController', SurveyController);

	SurveyController.$inject = ['AuthService', 'SurveyService'];

	function SurveyController(AuthService, SurveyService){

		/* jshint validthis: true */
		var vm = this;

		vm.survey = SurveyService.getSurvey();
		console.log(vm.survey);

		// Set current number of questions to 0
		vm.currentQuestion = 0;
		// Get max questions of survey
		vm.maxQuestions = (vm.survey.$child('questions').$getIndex().length) - 1;	

		vm.isSet = function(checkQuestion)
		{
			return vm.currentQuestion === checkQuestion;
		};

		vm.setQuestion = function(activeQuestion)
		{
			vm.currentQuestion = activeQuestion;
		};

		vm.prevQuestion = function()
		{
			if (vm.currentQuestion > 0)
			{
				vm.currentQuestion--;
			}
		};

		vm.nextQuestion = function()
		{
			if (vm.currentQuestion < vm.maxQuestions)
			{
				vm.currentQuestion++;
			}
		};

	}
})();