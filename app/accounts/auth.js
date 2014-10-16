(function() {
    'use strict';

    angular
        .module('crowdApp')
        .controller('AuthController', AuthController)
        .factory('AuthService', AuthService);

    AuthController.$inject = ['AuthService']; //.$inject is used to avoid minifaction errors.
    AuthService.$inject = ['$firebaseSimpleLogin', '$location', '$rootScope', 'FIREBASE_URL', 'DataService'];

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

    function AuthService($firebaseSimpleLogin, $location, $rootScope, FIREBASE_URL, DataService) {

        var authRef = new Firebase(FIREBASE_URL);
        var auth = $firebaseSimpleLogin(authRef);
        var registrationEmails = DataService.$child('registrationEmails'); // Registration emails table in Firebase

        var authServiceObject = {
            register: function(user) //accepts $scope.user from authController
                {
                    auth.$createUser(user.email, user.password).then(function(data) {
                        console.log(data);
                        authServiceObject.login(user, function() {
                            registrationEmails.$add({
                                email: user.email
                            }); // Register new registration for sign up email event. Need to call login for security rules before registering email
                        });
                    });
                    console.log("Register call" + user);
                },
            login: function(user, optionalCallback) {
                auth.$login('password', user).then(function(data) {
                    console.log(data); //Firebase docs note: returns user data if successful does not return error if not
                    if (optionalCallback) {
                        optionalCallback();
                    }
                    //Redirect users to the index
                    $location.path('/');
                });
                console.log("Login call" + user);
            },
            logout: function() {
                auth.$logout();
                //Redirect to "/" = "landingpage.html"
                $location.path('/');
            },
            getCurrentUser: function() {
                return auth.$getCurrentUser();
            }
        };

        $rootScope.$on("$firebaseSimpleLogin:error", function(e, error) {
            //Error catch
            console.log('firebaseSimpleLogin error: ' + error);
        });

        $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
            $rootScope.currentUser = user;
        });

        $rootScope.$on('$firebaseSimpleLogin:logout', function() {
            $rootScope.currentUser = null;
        });

        return authServiceObject;
    }
})();
