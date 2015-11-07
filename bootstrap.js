/**
 * Created by Kostiantyn on 11/7/2015.
 */
define([
    "require",
    "angular",
    "sourceDataProvider",
    "app"
], function(require, ng, sourceDataProvider){
    'use strict';

    require(["domReady!"], function(document){

        ng.bootstrap(document, ['app']);
    });
});