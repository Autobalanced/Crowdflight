(function(){
	'use strict';

	angular
		.module('crowdApp')
		.controller('ClientAuthController', ClientAuthController);

	ClientAuthController.$inject = ['ClientAuthService']; //.$inject is used to avoid minifaction errors. Can be removed and re-added before minification with ng-annotate.

	function ClientAuthController(ClientAuthService) {
        /* jshint validthis: true */
        var vm = this;

        //Object bound to client input on register and login page
        vm.client = {
            email: '',
            password: ''
        };

        //Method to register new client using the authService
        vm.register = function() {
            ClientAuthService.register(vm.client);
        };

        //Method to login existing client using the authService
        vm.login = function() {
            ClientAuthService.login(vm.client);
        };

        //Method to logout existing client using the authService
        vm.logout = function() {
            ClientAuthService.logout();
        };
    }

})();