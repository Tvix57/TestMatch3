System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameScenePresenter, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfField(extras) {
    _reporterNs.report("Field", "../../Logic/Field", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFieldHandler(extras) {
    _reporterNs.report("IFieldHandler", "../../Logic/Field", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatsInfo(extras) {
    _reporterNs.report("GameStatsInfo", "../../Logic/GameStatsInfo", _context.meta, extras);
  }

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
        constructor(view, _logic) {
          this.view = view;
          this._logic = _logic;

          this._logic.AddHandler(this);
        }

        NewGame(name) {
          this.view.SetName(name);
        }

        NewScore(score) {
          this.view.UpdateScore(score.toString());
        }

        UpdateField(field, fromOutside) {}

        EndGame(info) {}

        LoadData() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ae9e8ea598abdeb450e19423177861d10fb2169.js.map