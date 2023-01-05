// Make a function which:
// - First tries to require the name
// - Then falls back to global lookup
import fromGlobal from "./fromGlobal";
import fromRequireContext from "./fromRequireContext";

export default function (reqctx) {
  var fromCtx = fromRequireContext(reqctx);
  return function (className) {
    var component;
    try {
      // `require` will raise an error if this className isn't found:
      component = fromCtx(className);
    } catch (firstErr) {
      // fallback to global:
      try {
        component = fromGlobal(className);
      } catch (secondErr) {
        console.error(firstErr);
        console.error(secondErr);
      }
    }
    return component;
  };
}
