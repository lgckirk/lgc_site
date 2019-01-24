export default (function() {
    class ProjectsController {
        constructor(getNavTabs) {
            this.tabs = getNavTabs();

            this.projects = [
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
                {
                    heading: 'heading1',
                    detail: '<b>bold</b>'
                },
                {
                    heading: 'heading2',
                    detail: '<i>italic</b>'
                },
            ];
        }
    }

    return {
        controller: ProjectsController,
        templateUrl: './projects/projects.html'
    };
})();