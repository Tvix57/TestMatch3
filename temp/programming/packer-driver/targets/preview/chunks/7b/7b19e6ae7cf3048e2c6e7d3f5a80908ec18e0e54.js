System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, game, AbstractDispatcher, ApplicationListener, _crd;

  function _reportPossibleCrUseOfAbstractDispatcher(extras) {
    _reporterNs.report("AbstractDispatcher", "../../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApplicationHandler(extras) {
    _reporterNs.report("IApplicationHandler", "../AppDevice", _context.meta, extras);
  }

  _export("ApplicationListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      game = _cc.game;
    }, function (_unresolved_2) {
      AbstractDispatcher = _unresolved_2.AbstractDispatcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "385ebqC7B1LhpI2sU+JiD7b", "ApplicationListener", undefined);

      __checkObsolete__(['Game', 'game']);

      _export("ApplicationListener", ApplicationListener = class ApplicationListener extends AbstractDispatcher {
        constructor() {
          super();
          game.on(Game.EVENT_RESUME, this.OnResume, this);
          game.on(Game.EVENT_PAUSE, this.OnPause, this);
          game.on(Game.EVENT_CLOSE, this.OnExit, this);
        }

        OnResume() {
          this._dispatcher.Post(h => h.OnResumeApplication());
        }

        OnPause() {
          this._dispatcher.Post(h => h.OnPauseApplication());
        }

        OnExit() {
          this._dispatcher.Post(h => h.OnExitApplication());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b19e6ae7cf3048e2c6e7d3f5a80908ec18e0e54.js.map