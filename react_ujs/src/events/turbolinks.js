// Turbolinks 5+ got rid of named events (?!)
export function setup(ujs) {
  ujs.handleEvent("turbolinks:load", ujs.handleMount);
}

export function teardown(ujs) {
  ujs.removeEvent("turbolinks:load", ujs.handleMount);
}
