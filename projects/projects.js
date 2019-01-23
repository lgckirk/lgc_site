export default (function() {
    class ProjectsController {
        constructor(getNavTabs) {
            this.tabs = getNavTabs();
        }
    }

    return {
        controller: ProjectsController,
        templateUrl: './projects/projects.html'
    };
})();