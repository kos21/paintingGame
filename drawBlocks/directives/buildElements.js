/**
 * Created by Kostiantyn on 11/7/2015.
 */
define(["../module"], function(drawBlocks){

    drawBlocks.directive("buildElements", ["scope", function($scope){

        return {
            "restrict": "E",
            link: {
                pre: function preLink(scope, element, attrs){

                    $scope.sourceData = sourceDataProvider;
                    $scope.sourceElements =  $scope.sourceData;
                }
            },
            templateUrl: "drawBlocks/views/mainVertical.html"
        };
    }]);
});