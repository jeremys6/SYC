/**
 * Created by jeremysouffir on 25/10/2016.
 */
/**
 * Created by jeremysouffir on 26/03/2016.
 */
(function () {
    'use strict';

    var myApp = angular.module('sycApp', ['ngMaterial', 'ngMessages']);

    myApp.controller('sycWizardController', SycWizardController);
    SycWizardController.$inject = ['$http'];

    function SycWizardController($http) {
        var vm = this;
        function init() {
            vm.user = {
                name: 'John Doe',
                email: '',
                phone: '',
                address: 'Mountain View, CA',
                donation: 19.99
            };
        }

        init();
    }
}());
