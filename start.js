import slider from './slider/slider.js';
import navbar from './navbar/navbar.js';
import home from './homeController.js';
import contact from './contact/contact.js';
import projects from './projects/projects.js';
import navTabService from './navTabService/navTabService.js';

(function() {

/**
 * This array registers "pages" of the site.
 * A "page" is represented by a component with the same
 * name as the "page". For example, "contact" page is
 * represented by component <contact></>
 */
const routes = ['home', 'projects', 'contact'];

angular.module('lgcSite', ['ngAnimate', 'ngRoute'])
    .constant('siteRoutes', routes)
    .factory('getNavTabs', navTabService)
    .controller('homeController', home)
    .component('contact', contact)
    .component('projects', projects)
    .component('slider', slider)
    .component('navbar', navbar);

angular.module('lgcSite')
    .config(($routeProvider) => {
        routes.forEach((route) => {
            $routeProvider.when('/' + route, {
                template: `<${route}></${route}>`
            });
        });
    });

// let's go
angular.bootstrap(document, ['lgcSite']);

})();