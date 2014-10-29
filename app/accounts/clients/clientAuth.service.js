(function() {
    'use strict';

    angular
        .module('crowdApp')
        .factory('ClientAuthService', ClientAuthService);

    ClientAuthService.$inject = ['$firebaseSimpleLogin', '$location', '$rootScope', 'FIREBASE_URL', 'DataService'];

    function ClientAuthService ($firebaseSimpleLogin, $location, $rootScope, FIREBASE_URL, DataService) {

    	var authRef = new Firebase(FIREBASE_URL);
    	var auth = $firebaseSimpleLogin(authRef);

    	var crowdflightClients = DataService.$child('crowdflightClients'); // Connect to client array in Firebase

    	var clientAuthServiceObject = {
    	    register: function(client) //accepts vm.client from ClientAuthController
    	        {
    	            auth.$createUser(client.email, client.password).then(function(data) {
    	                console.log(data);
    	                clientAuthServiceObject.login(client, function() {
    	                    // registrationEmails.$add({ 
    	                    //     email: client.email // TODO: To be implemented later
    	                    // });
    	                    crowdflightClients.$add({
    	                        email: client.email,
    	                    }); 
    	                });
    	            });
    	            console.log("Register call" + client);
    	        },
    	    login: function(client, optionalCallback) {
    	        auth.$login('password', client).then(function(data) {
    	            console.log(data); //Firebase docs note: returns client data if successful does not return error if not
    	            if (optionalCallback) {
    	                optionalCallback();
    	            }
    	            //Redirect client to create.html for new Survey, should later have landing page for reports and other CMS activities.
    	            $location.path('/create');
    	        });
    	        console.log("Login call" + client);
    	    },
    	    logout: function() {
    	        auth.$logout();
    	        //Redirect to "/" = "landingpage.html"
    	        $location.path('/');
    	    },
    	    getCurrentClient: function() {
    	        return auth.$getCurrentUser();
    	    }
    	};

    	$rootScope.$on("$firebaseSimpleLogin:error", function(e, error) {
    	    //Error catch
    	    console.log('firebaseSimpleLogin error: ' + error);
    	});

    	$rootScope.$on('$firebaseSimpleLogin:login', function(e, client) {
    	    $rootScope.currentClient = client;
    	});

    	$rootScope.$on('$firebaseSimpleLogin:logout', function() {
    	    $rootScope.currentClient= null;
    	});

    	return clientAuthServiceObject;
    }

})();