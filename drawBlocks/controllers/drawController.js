/**
 * Created by Kostiantyn on 11/7/2015.
 */
define(["../module"], function (drawBlocks) {
    'use strict';

    drawBlocks.controller("drawController", [ "$scope", "sourceData", "httpService" ], function($scope, sourceData, httpService){

        /**
         * Restore save of matrix
         */
        $scope.saveCurrentMatrix = function(){
            httpService.saveImage(sourceData, function(resultMessage){

                console.log(resultMessage);
            });
        };

        /**
         *
         */
        $scope.restoreStateMatrix = function(){
            httpService.getMatrix(sourceData, function(resultJson){

                $scope.sourceData = resultJson;
            });
        };
        /**
         * Get number
         *
         * @param num
         *
         * @returns {Array}
         */
        $scope.getNumber = function(num){

            return new Array(num);
        };
    });
});