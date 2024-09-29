System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ScoreScenePresenter, _crd;

  function _reportPossibleCrUseOfGameStats(extras) {
    _reporterNs.report("GameStats", "../../Logic/GameStatsInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreSceneComponent(extras) {
    _reporterNs.report("ScoreSceneComponent", "./ScoreSceneComponent", _context.meta, extras);
  }

  _export("ScoreScenePresenter", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21d2eznj5VDNpNXA3djcfh/", "ScoreScenePresenter", undefined);

      _export("ScoreScenePresenter", ScoreScenePresenter = class ScoreScenePresenter {
        constructor(view, context) {
          this.view = view;
          this.context = context;
        }

        LoadScores() {
          this.context.GetData().forEach(info => {
            this.view.AddScore(info.name, info.score);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5afea09b21375b3c45d66f6d348314896aa9152.js.map