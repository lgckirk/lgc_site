/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./slider/slider.js
/**
 * A slider is a content container with 2 windows.
 * The left and right windows slide to their respected
 * slide when requested.
 * @param boolean open Toggle the windows.
 * @param function onClose What to do on sliding off (optional).
 * @transclude sliderLeft
 * @transclude sliderRight
 */
class SliderController {
    constructor($element, $animate) {
        this._animate = $animate;
        this._wings = [
            $element[0].getElementsByClassName('sid-slider-left')[0],
            $element[0].getElementsByClassName('sid-slider-right')[0]
        ];
    }

    $onInit() {
        if (typeof this.open !== 'boolean') {
            console.error('Slider [Component]: parameter "open" must be boolean.');
        }
        this.showSlider = this.open;
    }

    $onChanges(change) {
        if (change.hasOwnProperty('open')
            && !change.open.isFirstChange()) {
            if (change.open.currentValue === true) {
                this._show();
            } else {
                this._hide();
            }
        }
    }

    $postLink() {
        if (this.open === false) {
            this._hide();
        }
    }

    /**
     * Triggers animation and then run user's callback
     */
    _hide() {
        this._wings.forEach((ele) => {
            this._animate.addClass(ele, 'animation-slider-fold')
                .then(() => {
                    // after animation, run callback and hide the slider
                    if (typeof this.onClose === 'function') {
                        this.onClose();
                    }
                    this.showSlider = false;
                });
        });
    }

    _show() {
        this.showSlider = true;
        this._wings.forEach((ele) => {
            if (!angular.element(ele).hasClass('animation-slider-fold')) {
                console.error('Slider [Component]: attempting to' +
                    '_show() windows that are not hidden.');
            } else {
                this._animate.removeClass(ele, 'animation-slider-fold');
            }
        });
    }
}

/* harmony default export */ var slider = ({
    transclude: {
        'left': 'sliderLeft',
        'right': 'sliderRight'
    },
    controller: SliderController,
    templateUrl: './slider/slider.html',
    bindings: {
        open: '<',
        onClose: '<'
    }
});

// CONCATENATED MODULE: ./navbar/navbar.js
/**
 * A component that takes an array of item definitions and
 * render a horizontal navigation bar with it.
 * Note the order will be the same as the order of the items
 * in the input array.
 * @param array[object] items Options:
 *      href: string
 *      label: string
 *      openNewTab: boolean True means target=_blank (optional)
 *      onClick: function Callback to run on click. The angular
 *          "$event" object is passed in as argument (optional).
 */
class NavbarController {
    constructor() {}

    $onInit() {
        this.stuffs = this.items.map((item) => {
            const newDef = Object.assign({}, item);

            // handle openNewTab
            if (!item.hasOwnProperty('openNewTab')) {
                newDef.openNewTab = false;
            }
            newDef.target = newDef.openNewTab ?
                '_blank' : '_self';

            // handle ng-click
            if (item.hasOwnProperty('onClick')
                && typeof item.onClick !== 'function') {
                console.error('Navbar [component]: item onClick option must be a function.');
            }
            newDef.onClick = typeof newDef.onClick === 'function' ?
                newDef.onClick : () => {};

            return newDef;
        });
    }
}

/* harmony default export */ var navbar = ({
    controller: NavbarController,
    templateUrl: './navbar/navbar.html',
    bindings: {
        items: '<'
    }
});

// CONCATENATED MODULE: ./homeController.js
/**
 * This is the main controller of this app.
 */
/* harmony default export */ var homeController = (class {
    constructor($scope, getNavTabs, $location) {
        // flag for opening/closing the home page windows
        this.showWindows = true;

        // navigation tabs
        this.tabs = getNavTabs(true);

        // only show the windows on home page
        $scope.$on('$routeChangeSuccess', () => {
            if ($location.path() === '/home') {
                if (!this.showWindows) {
                    this.showWindows = true;
                }
            } else if (this.showWindows) {
                this.showWindows = false;
            }
        });
    }
});
// CONCATENATED MODULE: ./contact/contact.js
/**
 * This component is just a static page for the contact page.
 */
class ContactController {
    constructor(getNavTabs, $uibModal) {
        this._bModal = $uibModal;
        this.tabs = getNavTabs();
        this.contacts = [
            {
                label: 'Github',
                href: 'https://github.com/lgckirk',
                openNewTab: true
            },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100009996582551',
                openNewTab: true
            },
            {
                label: 'WeChat',
                href: '#',
                openNewTab: true,
                onClick: this._weChatOnClick.bind(this)
            }
        ];
    }

    _weChatOnClick($event) {
        $event.preventDefault();
        this._bModal.open({
            windowClass: 'contact-modal-wechat',
            template: `<img src="./asset/wechat.jpg"
                alt="gaochang's wechat's QR code" />`
        }).result.then(() => {}, () => {});
    }
}

/* harmony default export */ var contact = ({
    controller: ContactController,
    templateUrl: './contact/contact.html'
});

// CONCATENATED MODULE: ./projects/projects.js
/**
 * The project list is loaded asynchronously.
 * Might as well register it as a constant
 * but I just really like to do it this way.
 */
let projectList = false;

/**
 * This is the page component for the projects page.
 */
class ProjectsController {
    constructor(getNavTabs, $http) {
        this.tabs = getNavTabs();
        this.projects = projectList;
        if (this.projects === false) {
            this.projects = [];
            $http.get('./project-list.json').then(res => {
                projectList = this.projects = res.data.projectList;
            });
        }
    }
}

/* harmony default export */ var projects = ({
    controller: ProjectsController,
    templateUrl: './projects/projects.html'
});

// CONCATENATED MODULE: ./navTabService/navTabService.js
/* harmony default export */ var navTabService = (function($location, siteRoutes) {
    /**
     * This function returns an array of navbar item definitions.
     * @param boolean returnAll If this flag is set to true,
     *      this function will return all navbar items, ignoring
     *      the current routing path (optional).
     */
    return function(returnAll) {
        const tabs = siteRoutes
            .map((route) => {
                // "home" should always be present
                if (!returnAll && route !== 'home'
                    && '/'+route === $location.path()) {
                    return false;
                }
                return {
                    href: '#!' + route,
                    label: route.charAt(0).toUpperCase() + route.slice(1)
                };
            })
            .filter((route) => !!route);

        tabs.push({
            href: 'https://lgckirk.github.io/',
            label: 'Blog',
            openNewTab: true
        });

        return tabs;
    };
});;
// CONCATENATED MODULE: ./start.js







/**
 * This array registers "pages" of the site.
 * A "page" is represented by a component with the same
 * name as the "page". For example, "contact" page is
 * represented by component <contact></>
 */
const routes = ['home', 'projects', 'contact'];

angular.module('lgcSite', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
    .constant('siteRoutes', routes)
    .factory('getNavTabs', navTabService)
    .controller('homeController', homeController)
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


/***/ })
/******/ ]);