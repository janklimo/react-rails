// Attach handlers to browser events to mount
// (There are no unmount handlers since the page is destroyed on navigation)
export function setup(ujs) {
  if ("addEventListener" in window) {
    ujs.handleEvent("DOMContentLoaded", ujs.handleMount);
  } else {
    // add support to IE8 without jQuery
    ujs.handleEvent("onload", ujs.handleMount);
  }
}

export function teardown(ujs) {
  ujs.removeEvent("DOMContentLoaded", ujs.handleMount);
  ujs.removeEvent("onload", ujs.handleMount);
}
