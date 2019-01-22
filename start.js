import slider from './slider/slider.js';
import navbar from './navbar/navbar.js';
import home from './homeController.js';

(function() {

const routes = ['home', 'projects', 'contact'];

angular.module('lgcSite', ['ngAnimate', 'ngRoute'])
    .constant('myBlogUrl', 'https://lgckirk.github.io/')
    .constant('siteRoutes', routes)
    .controller('homeController', home)
    .component('slider', slider)
    .component('navbar', navbar);

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