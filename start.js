(function() {

import slider from './slider/slider.js';
import home from './homeController.js';

const routes = ['home', 'projects', 'contact'];

angular.module('lgcSite', ['ngAnimate', 'ngRoute'])
    .controller('homeController', home)
    .value('routes', routes)
    .component('slider', slider);

angular.module('lgcSite')
    .config(($routeProvider) => {
        routes.forEach((route) => {
            $routeProvider.when('/'+route, {
                template: 'tttt'
            });
        });
    });

// let's go
angular.bootstrap(document, ['lgcSite']);

})();