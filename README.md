# What is this?

This is main site of my personal portfolio, where I showcase my stuffs.

# Known Issue

* The home page windows have a sliding-window animation. The animation is intended to only trigger when user clicks on a link. But due to the ```transition: xxx ``` css implementation, stretching the browser window (which will trigger a layout change at the breakpoint) will also have the animation. See the Slider component.

* Because of routing, the "back" button of the browser doesn't work.

# TODO

* Routing needs a default page
* Contact->WeChat and projects should have a popup