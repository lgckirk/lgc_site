export default function($location, siteRoutes) {
    return function() {
        const tabs = siteRoutes
            .map((route) => {
                // "home" should always be present
                if (route !== 'home' && '/'+route === $location.path()) {
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