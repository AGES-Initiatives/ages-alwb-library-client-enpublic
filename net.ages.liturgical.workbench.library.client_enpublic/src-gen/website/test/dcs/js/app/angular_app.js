define("alwb", ["angular", "angular_app"], function(angular)
{
    var alwb = angular.module("alwb", ['ui.bootstrap']);

    angular.element(document).ready(function()
        { angular.bootstrap(document,['ui-bootstrap']); });

alwb.controller('StaticCtrl', function StaticCtrl($scope) {
    $scope.countries = {
        'usa': {
            'San Francisco': ['SOMA', 'Richmond', 'Sunset'],
            'Los Angeles': ['Burbank', 'Hollywood']
        },
        'canada': {
            'People dont live here': ['igloo', 'cave']
        }
    };
});


});
