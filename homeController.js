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
}