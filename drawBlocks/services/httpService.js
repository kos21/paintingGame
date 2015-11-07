/**
 * Created by Kostiantyn on 11/7/2015.
 */
define(["../module"], function(drawBlocks){
    drawBlocks.factory("httpService", ["$http", function($http){

        return {
            saveImage: function(data, callback){
                $http({
                    method: "POST",
                    "url": "/save/matrix/data/",
                    data: data,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },
            getMatrix: function(){
                $http({
                    method: "GET",
                    "url": "/get/matrix/data/",
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            }
        };
    }]);
});