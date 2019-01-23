
export default (function() {

/**
 * A slider is a content container with 2 windows.
 * The left and right windows slide to their respected
 * slide when requested.
 * @param boolean open Toggle the windows.
 * @param function onClose What to do on sliding off (optional).
 * @transclude sliderLeft
 * @transclude sliderRight
 */
class SliderController {
    constructor($element, $animate) {
        this._animate = $animate;
        this._wings = [
            $element[0].getElementsByClassName('sid-slider-left')[0],
            $element[0].getElementsByClassName('sid-slider-right')[0]
        ];
    }

    $onInit() {
        if (typeof this.open !== 'boolean') {
            console.error('Slider [Component]: parameter "open" must be boolean.');
        }
        this.showSlider = this.open;
    }

    $onChanges(change) {
        if (change.hasOwnProperty('open')
            && !change.open.isFirstChange()) {
            if (change.open.currentValue === true) {
                this._show();
            } else {
                this._hide();
            }
        }
    }

    $postLink() {
        if (this.open === false) {
            this._hide();
        }
    }

    /**
     * Triggers animation and then run user's callback
     */
    _hide() {
        this._wings.forEach((ele) => {
            this._animate.addClass(ele, 'animation-slider-fold')
                .then(() => {
                    // after animation, run callback and hide the slider
                    if (typeof this.onClose === 'function') {
                        this.onClose();
                    }
                    this.showSlider = false;
                });
        });
    }

    _show() {
        this.showSlider = true;
        this._wings.forEach((ele) => {
            if (!angular.element(ele).hasClass('animation-slider-fold')) {
                console.error('Slider [Component]: attempting to' +
                    '_show() windows that are not hidden.');
            } else {
                this._animate.removeClass(ele, 'animation-slider-fold');
            }
        });
    }
}

return {
    transclude: {
        'left': 'sliderLeft',
        'right': 'sliderRight'
    },
    controller: SliderController,
    templateUrl: './slider/slider.html',
    bindings: {
        open: '<',
        onClose: '<'
    }
};

})();
