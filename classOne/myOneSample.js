var myModule = angular.module("myOneClass", []);

myModule.controller("myOneController", ['$scope',
    function myOneClass($scope) {
        $scope.greeting = {
            text: "Leona"
        };
    }
]);