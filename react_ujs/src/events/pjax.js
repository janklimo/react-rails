// pjax support
export function setup(ujs) {
  ujs.handleEvent("ready", ujs.handleMount);
  ujs.handleEvent("pjax:end", ujs.handleMount);
  ujs.handleEvent("pjax:beforeReplace", ujs.handleUnmount);
}

export function teardown(ujs) {
  ujs.removeEvent("ready", ujs.handleMount);
  ujs.removeEvent("pjax:end", ujs.handleMount);
  ujs.removeEvent("pjax:beforeReplace", ujs.handleUnmount);
}
