System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameStats, Field, GameLogic, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStats(extras) {
    _reporterNs.report("GameStats", "../Logic/GameStatsInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfField(extras) {
    _reporterNs.report("Field", "../Logic/Field", _context.meta, extras);
  }

  _export("GameLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameStats = _unresolved_2.GameStats;
    }, function (_unresolved_3) {
      Field = _unresolved_3.Field;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "890ecLbQr1Ke6+UMKRHU7Z0", "GameLogic", undefined);

      _export("GameLogic", GameLogic = class GameLogic {
        constructor(state) {
          this._field = void 0;
          this._gameStats = void 0;
          this.state = state;
          this._field = new (_crd && Field === void 0 ? (_reportPossibleCrUseOfField({
            error: Error()
          }), Field) : Field)(state.isFinished, state, state.field);
          this._gameStats = new (_crd && GameStats === void 0 ? (_reportPossibleCrUseOfGameStats({
            error: Error()
          }), GameStats) : GameStats)(this._field, state.gameStats);
        }

        ResolveField() {
          return this._field;
        }

        ResolveGameStats() {
          return this._gameStats;
        }

        GetName() {
          return this.state.name;
        }

        WillSave(currentState) {
          currentState.field = this._field.GetField();
          currentState.gameStats = this._gameStats.GetData();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45e591488b6e4fccaf3cf3e84af4a2a0fffbf632.js.map