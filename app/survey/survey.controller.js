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
	
	}
})();