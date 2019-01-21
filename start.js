import slider from './slider/slider.js';
import home from './homeController.js';

(function() {

const routes = ['home', 'projects', 'contact'];

angular.module('lgcSite', ['ngAnimate', 'ngRoute'])
    .value('siteRoutes', routes)
    .controller('homeController', home)
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