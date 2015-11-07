/**
 * Created by Kostiantyn on 11/7/2015.
 */
define([
    'angular',
    "./drawBlocks/index"
], function(ng){
    'use strict';

    return ng.module('app', [
        "app.drawBlocks"
    ]);
});