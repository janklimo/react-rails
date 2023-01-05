// Attach handlers to Turbolinks-Classic events
// for mounting and unmounting components
export function setup(ujs) {
  ujs.handleEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
  ujs.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
}

export function teardown(ujs) {
  ujs.removeEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
  ujs.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
}
