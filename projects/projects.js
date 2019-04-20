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

export default {
    controller: ProjectsController,
    templateUrl: './projects/projects.html'
};
