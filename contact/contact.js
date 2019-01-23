export default (function() {

/**
 * This component is just a static page for the contact page.
 */
class ContactController {
    constructor(getNavTabs) {
        this.tabs = getNavTabs();
        this.contacts = [
            {
                label: 'Github',
                href: 'https://github.com/lgckirk',
                openNewTab: true
            },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100009996582551',
                openNewTab: true
            },
            {
                label: 'WeChat',
                href: '#',
                openNewTab: true
            }
        ];
    }
}

return {
    controller: ContactController,
    templateUrl: './contact/contact.html'
};

})();
