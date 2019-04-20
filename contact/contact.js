/**
 * This component is just a static page for the contact page.
 */
class ContactController {
    constructor(getNavTabs, $uibModal) {
        this._bModal = $uibModal;
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
                openNewTab: true,
                onClick: this._weChatOnClick.bind(this)
            }
        ];
    }

    _weChatOnClick($event) {
        $event.preventDefault();
        this._bModal.open({
            windowClass: 'contact-modal-wechat',
            template: `<img src="./asset/wechat.jpg"
                alt="gaochang's wechat's QR code" />`
        }).result.then(() => {}, () => {});
    }
}

export default {
    controller: ContactController,
    templateUrl: './contact/contact.html'
};
