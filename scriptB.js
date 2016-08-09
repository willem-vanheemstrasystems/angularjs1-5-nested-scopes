var myApp = angular
    .module("myModule", [])
    .controller("countryController", function() {
        this.name = "India";
    })
    .controller("stateController", function() {
        this.name = "Maharashtra";
    })
    .controller("cityController", function() {
        this.name = "Mumbai";
    });