import * as nativeEvents from "./native";
import * as turboEvents from "./turbo";

// see what things are globally available
// and setup event handlers to those things
export default function (ujs) {
  if (ujs.handleEvent) {
    // We're calling this a second time -- remove previous handlers
    turboEvents.teardown(ujs);
    nativeEvents.teardown(ujs);
  }

  if ("addEventListener" in window) {
    ujs.handleEvent = function (eventName, callback) {
      document.addEventListener(eventName, callback);
    };
    ujs.removeEvent = function (eventName, callback) {
      document.removeEventListener(eventName, callback);
    };
  } else {
    ujs.handleEvent = function (eventName, callback) {
      window.attachEvent(eventName, callback);
    };
    ujs.removeEvent = function (eventName, callback) {
      window.detachEvent(eventName, callback);
    };
  }

  // Detect which kind of events to set up:
  if (typeof Turbo !== "undefined") {
    turboEvents.setup(ujs);
  } else {
    nativeEvents.setup(ujs);
  }
}
