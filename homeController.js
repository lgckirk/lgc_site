/**
 * This is the main controller of this app.
 */
export default
class {
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
}