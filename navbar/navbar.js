/**
 * A component that takes an array of item definitions and
 * render a horizontal navigation bar with it.
 * Note the order will be the same as the order of the items
 * in the input array.
 * @param array[object] items Options:
 *      href: string
 *      label: string
 *      openNewTab: boolean True means target=_blank (optional)
 *      onClick: function Callback to run on click. The angular
 *          "$event" object is passed in as argument (optional).
 */
class NavbarController {
    constructor() {}

    $onInit() {
        this.stuffs = this.items.map((item) => {
            const newDef = Object.assign({}, item);

            // handle openNewTab
            if (!item.hasOwnProperty('openNewTab')) {
                newDef.openNewTab = false;
            }
            newDef.target = newDef.openNewTab ?
                '_blank' : '_self';

            // handle ng-click
            if (item.hasOwnProperty('onClick')
                && typeof item.onClick !== 'function') {
                console.error('Navbar [component]: item onClick option must be a function.');
            }
            newDef.onClick = typeof newDef.onClick === 'function' ?
                newDef.onClick : () => {};

            return newDef;
        });
    }
}

export default {
    controller: NavbarController,
    templateUrl: './navbar/navbar.html',
    bindings: {
        items: '<'
    }
};
