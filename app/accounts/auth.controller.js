(function(){
	'use strict';

	angular
		.module('crowdApp')
		.controller('AuthController', AuthController);

	AuthController.$inject = ['AuthService']; //.$inject is used to avoid minifaction errors. Can be removed and re-added before minification with ng-annotate.

	function AuthController(AuthService) {
        /* jshint validthis: true */
        var vm = this;

        //Object bound to user input on register and login page
        vm.user = {
            email: '',
            password: ''
        };

        //Method to register new user using the authService
        vm.register = function() {
            AuthService.register(vm.user);
        };

        //Method to login existing user using the authService
        vm.login = function() {
            AuthService.login(vm.user);
        };

        //Method to logout existing user using the authService
        vm.logout = function() {
            AuthService.logout();
        };
    }

})();