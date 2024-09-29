System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AbstractDispatcher, Dispatcher, _crd;

  _export({
    AbstractDispatcher: void 0,
    Dispatcher: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b877uleYhJ1YU+Pj8txRwK", "Dispatcher", undefined);

      _export("AbstractDispatcher", AbstractDispatcher = class AbstractDispatcher {
        constructor() {
          this._dispatcher = new Dispatcher();
        }

        AddHandler(arg) {
          this._dispatcher.AddObserver(arg);
        }

        RemoveHandler(arg) {
          this._dispatcher.RemoveObserver(arg);
        }

        RemoveAll() {
          this._dispatcher.RemoveAll();
        }

      });

      _export("Dispatcher", Dispatcher = class Dispatcher {
        constructor() {
          this._observers = void 0;
          this._observers = new Array();
        }

        Post(fn) {
          this._observers.forEach(element => {
            fn(element);
          });
        }

        AddObserver(arg) {
          if (this._observers.indexOf(arg) != -1) return;

          this._observers.push(arg);
        }

        RemoveObserver(arg) {
          var index = this._observers.indexOf(arg);

          if (index != -1) {
            this._observers.splice(index, 1);
          }
        }

        RemoveAll() {
          this._observers.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67caa09a54ca6312c98bac70ae4ef7dca940b398.js.map