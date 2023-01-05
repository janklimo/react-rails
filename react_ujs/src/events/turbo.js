export function setup(ujs) {
  ujs.handleEvent("turbo:load", ujs.handleMount);
  ujs.handleEvent("turbo:before-render", ujs.handleUnmount);
}

export function teardown(ujs) {
  ujs.removeEvent("turbo:load", ujs.handleMount);
  ujs.removeEvent("turbo:before-render", ujs.handleUnmount);
}
