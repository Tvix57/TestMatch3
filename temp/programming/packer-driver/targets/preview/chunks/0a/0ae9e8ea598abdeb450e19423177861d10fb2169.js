System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameScenePresenter, _crd;

  function _reportPossibleCrUseOfGameSceneComponent(extras) {
    _reporterNs.report("GameSceneComponent", "./GameSceneComponent", _context.meta, extras);
  }

  _export("GameScenePresenter", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a74c5j5WWJI3p+6Ca0ZXBfZ", "GameScenePresenter", undefined);

      _export("GameScenePresenter", GameScenePresenter = class GameScenePresenter {
        constructor(view // private _logick: GameLogic
        ) {
          this.view = view;
        }

        updateScore() {
          this.view.UpdateScore("0");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ae9e8ea598abdeb450e19423177861d10fb2169.js.map