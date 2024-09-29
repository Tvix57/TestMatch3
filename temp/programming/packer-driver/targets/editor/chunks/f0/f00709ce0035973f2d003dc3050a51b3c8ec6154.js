System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, IState, GameState, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatsInfo(extras) {
    _reporterNs.report("GameStatsInfo", "../Logic/GameStatsInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "../Save/SaveInterfaces", _context.meta, extras);
  }

  _export("GameState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      IState = _unresolved_2.IState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af987lOHDFGpYY4UVBxRT9S", "GameState", undefined);

      _export("GameState", GameState = class GameState extends (_crd && IState === void 0 ? (_reportPossibleCrUseOfIState({
        error: Error()
      }), IState) : IState) {
        constructor(name, score, gameStats, field, isFinished) {
          super();
          this.name = void 0;
          this.score = void 0;
          this.gameStats = void 0;
          this.field = void 0;
          this.isFinished = void 0;
          this.name = name != null ? name : "";
          this.score = score != null ? score : 0;
          this.gameStats = gameStats != null ? gameStats : new Array();
          this.field = field != null ? field : new Array();
          this.isFinished = isFinished != null ? isFinished : false;
        }

        toJSON() {
          return {
            gameStats: this.gameStats,
            field: this.field,
            isFinished: this.isFinished
          };
        }

        static Load(input) {
          return new GameState(input.name, input.score, input.gameStats, input.field, input.isFinished);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f00709ce0035973f2d003dc3050a51b3c8ec6154.js.map