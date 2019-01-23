/**
 * This is the main controller of this app.
 */
export default
class {
    constructor($scope, siteRoutes, myBlogUrl, $location) {
        // flag for opening/closing the home page windows
        this.showWindows = true;

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