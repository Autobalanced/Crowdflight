(function() {
    'use strict';

    angular
        .module('crowdApp')
        .factory('FIREBASE_URL', FIREBASE_URL)
        .factory('DataService', DataService);

    function FIREBASE_URL() {
        return 'https://crowdflight.firebaseio.com/';
    }

    function DataService($firebase, FIREBASE_URL) {
        var dataRef = new Firebase(FIREBASE_URL);
        var fireData = $firebase(dataRef);

        return fireData;
    }
})();
