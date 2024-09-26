System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Loop, GameStats, Field, GameLogic, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoop(extras) {
    _reporterNs.report("Loop", "./../Logic/Loop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStats(extras) {
    _reporterNs.report("GameStats", "../GameStats/GameStats", _context.meta, extras);
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
      Loop = _unresolved_2.Loop;
    }, function (_unresolved_3) {
      GameStats = _unresolved_3.GameStats;
    }, function (_unresolved_4) {
      Field = _unresolved_4.Field;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "890ecLbQr1Ke6+UMKRHU7Z0", "GameLogic", undefined);
      /**
       * 
       * GameLogic.ts
       * db://assets/Scripts/Game/GameLogic.ts
       *
       */


      _export("GameLogic", GameLogic = class GameLogic {
        constructor(timer, state) {
          this._loop = void 0;
          this._field = void 0;
          this._gameStats = void 0;
          this.state = state;
          this._loop = new (_crd && Loop === void 0 ? (_reportPossibleCrUseOfLoop({
            error: Error()
          }), Loop) : Loop)(timer);
          this._field = new (_crd && Field === void 0 ? (_reportPossibleCrUseOfField({
            error: Error()
          }), Field) : Field)(state.field);
          this._gameStats = new (_crd && GameStats === void 0 ? (_reportPossibleCrUseOfGameStats({
            error: Error()
          }), GameStats) : GameStats)(state.gameStats);
        }

        ResolveLoop() {
          return this._loop;
        }

        ResolveField() {
          return this._field;
        }

        ResolveGameStats() {
          return this._gameStats;
        }

        GetName() {
          return this.state.field.name;
        }

        WillSave(currentState) {
          currentState.gameStats = this._gameStats.GetTotal();
        }

        Finish() {
          this._loop.RemoveAll();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45e591488b6e4fccaf3cf3e84af4a2a0fffbf632.js.map