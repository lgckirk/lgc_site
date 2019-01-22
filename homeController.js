/**
 * This is the main controller of this app.
 */
export default
class {
    constructor($scope, siteRoutes, myBlogUrl, $location) {
        /**
         * These 2 flags control the rendering of
         * 1. The home page window (Picture | Description)
         * 2. The container of the actual content
         */
        this.showWindows = true;
        this.showContent = false;

        this.onWindowShuts = () => {
            this.showContent = true;
            $scope.$digest();
        };

        // navigation tabs
        this.tabs = siteRoutes.map((route) => {
            return {
                href: '#!' + route,
                label: route.charAt(0).toUpperCase() + route.slice(1)
            };
        });
        this.tabs.push({
            href: myBlogUrl,
            label: 'Blog',
            openNewTab: true
        });

        // must inject $route for these events to be available
        // $scope.$on('$routeChangeStart', (event, next, current) => {
        //     if ($location.path() === '/home') {
        //         this.showContent = false;
        //         this.showWindows = true;
        //     } else {
        //         this.showWindows = false;
        //     }
        // });
    }
}