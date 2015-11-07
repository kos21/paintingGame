/**
 * Created by Kostiantyn on 11/7/2015.
 */
require.config({
    paths: {
        "domReady": "./bower_components/domReady/domReady",
        "angular": "./bower_components/angular/angular",
        "sourceData": "./sourceDataProvider"
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    },
    "deps": [ 'bootstrap' ]
});