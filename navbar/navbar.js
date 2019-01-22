export default (function() {
    /**
     * A component that takes an array of item definitions and
     * render a horizontal navigation bar with it.
     * Note the order will be the same as the order of the items
     * in the input array.
     * @param array[object] items Options:
     *      href: string
     *      label: string
     *      openNewTab: boolean True means target=_blank (optional)
     */
    class NavbarController {
        constructor() {}

        $onInit() {
            this.stuffs = this.items.map((item) => {
                const newDef = Object.assign({}, item);
                if (!item.hasOwnProperty('openNewTab')) {
                    newDef.openNewTab = false;
                }
                newDef.target = newDef.openNewTab ?
                    '_blank' : '_self';
                return newDef;
            });
        }
    }

    return {
        controller: NavbarController,
        templateUrl: './navbar/navbar.html',
        bindings: {
            items: '<'
        }
    };
})();