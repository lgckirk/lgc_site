export default function($location, siteRoutes) {
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
};