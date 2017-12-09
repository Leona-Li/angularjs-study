var myModule = angular.module("myDirective", []);

myModule.directive("hello", function() {
    return {
        restrict: "E",
        template: "<div>hello, this is my first directive</div>",
        replace: true
    };
});

myModule.controller("oneController", ["$scope",
    function oneController($scope) {
        $scope.oneRe = {
            text: "Leona"
        };
    }
]);